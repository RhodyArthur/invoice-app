import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState, Invoice, Item } from '../../interface/invoice';
import { CommonModule } from '@angular/common';
import { GenerateCodeService } from '../../services/generate-code.service';
import { Store } from '@ngrx/store';
import { ModalService } from '../../services/modal.service';
import { addInvoice, updateInvoice } from '../../store/invoice.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css'
})
export class InvoiceFormComponent implements OnInit{
  @Input() invoice?: Invoice;

  newInvoiceForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private codeService: GenerateCodeService,
              private store: Store<AppState>,
              private modalService: ModalService,
              private router: Router
  ) {}

  ngOnInit() {
    this.newInvoiceForm = this.fb.group({
      // bill from
      billFrom: this.fb.group({
        street: [this.invoice?.senderAddress.street || '', Validators.required],
        city: [this.invoice?.senderAddress.city || '', Validators.required],
        code: [this.invoice?.senderAddress.postCode || '', Validators.required],
        country: [this.invoice?.senderAddress.country || '', Validators.required]
      }),
      // bill to
      billTo: this.fb.group({
        clientName: [this.invoice?.clientName || '', [Validators.required, Validators.minLength(2)]],
        clientEmail: [this.invoice?.clientEmail || '', [Validators.required, Validators.email]],
        street: [this.invoice?.clientAddress.street || '', Validators.required],
        city: [this.invoice?.clientAddress.city || '', Validators.required],
        code: [this.invoice?.clientAddress.postCode || '', Validators.required],
        country: [this.invoice?.clientAddress.country || '', Validators.required]
      }),
      // invoice details
      createdAt: [this.invoice?.createdAt || '', Validators.required],
      paymentTerms: [this.invoice?.paymentTerms || '', Validators.required],
      description: [this.invoice?.description || '', Validators.required],
      // items
      items: this.fb.array(this.invoice?.items.map(item => this.createItem(item)) || [])
    });

    console.log(this.invoice)
    if(!this.invoice) {
      // add a new item if it's a new form
      this.addItem()
    }
  }


  // create Item
  createItem(item: any = {}) {
    return this.fb.group({
      itemName: [item.name || '', [Validators.required, Validators.minLength(2)]],
      quantity: [item.quantity || 1, [Validators.required, Validators.min(1)]],
      price: [item.price || 0, [Validators.required, Validators.min(0)]],
      total: [{value: item.total || 0, disabled : true}]
    })

  }

  get items(): FormArray {
    return this.newInvoiceForm.get('items') as FormArray
  }

  // add item to Items array
  addItem() {
    const formItem = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }],
    });

    this.items.push(formItem);
  }
  

  // remove item
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  // calculate item total
  calculateItemTotal(index: number) {
    const item = this.items.at(index) as FormGroup;
    const quantity = item.get('quantity')?.value ?? 0;
    const price = item.get('price')?.value ?? 0;
    const total = quantity * price;
    item.get('total')?.setValue(total);
  }

  // calculate total amount
  calculateTotalAmount(items: Item[]): number {
    return items.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0)
  }


  // calculate paymentDue
  calculatePaymentDue(invoiceDate: string, paymentTerms: number): string {
    const date = new Date(invoiceDate);
    date.setDate(date.getDate() + paymentTerms);
    return date.toISOString();
  }


  // save as Draft
  saveAsDraft() {
    const formData = this.newInvoiceForm.value;

    const draftInvoice =  {...formData,
      id: this.invoice ? this.invoice.id : this.codeService.generateUniqueId(),
      createdAt: new Date().toISOString().split('T')[0],
      paymentDue:  formData.paymentTerms,
      status: 'draft',
      items: formData.items.map((item: Item) => ({
        ...item,
        total: (item.quantity || 0) * (item.price || 0),
      })),
      total: this.calculateTotalAmount(formData.items)

    };

    this.store.dispatch(addInvoice({ invoice: draftInvoice}))
    console.log(draftInvoice)
    this.modalService.hide();
  }

  onSubmit() {
    if (this.newInvoiceForm.valid) {
      const formData = this.newInvoiceForm.value;
      const createdAt = new Date(formData.createdAt);
      const paymentDue = new Date(createdAt);
      paymentDue.setDate(paymentDue.getDate() + formData.paymentTerms);

      const newInvoice = {
        ...formData,
        id: this.invoice
          ? this.invoice.id
          : this.codeService.generateUniqueId(),
        createdAt: this.invoice
          ? this.invoice.createdAt
          : createdAt.toISOString().split('T')[0],
        paymentDue: paymentDue.toISOString().split('T')[0],
        status: this.invoice
          ? this.invoice.status
          : 'pending',
        items: formData.items.map((item: Item) => ({
          ...item,
          total: item.quantity * item.price,
        })),
        total: formData.calculateTotalAmount(),
      };

      //edit an existing invoice
      if (this.invoice) {
        // update existing invoice
        this.store.dispatch(
          updateInvoice({ invoice: { id: this.invoice.id, ...newInvoice } })
        );
      } else {
        this.store.dispatch(addInvoice({ invoice: newInvoice }));
      }
    }

    // this.modalService.hide()

}

closeForm() {
  this.modalService.hide()
}

navigateToPrevious() {
  this.modalService.hide()
}
}