import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, Invoice } from '../../interface/invoice';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllInvoices, selectInvoiceById } from '../../store/invoice.selectors';
import { CommonModule } from '@angular/common';
import { StatusComponent } from "../status/status.component";
import { ButtonComponent } from "../button/button.component";
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';
import { loadInvoice, updateInvoiceStatus } from '../../store/invoice.actions';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [CommonModule, StatusComponent, ButtonComponent, ModalComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent implements OnInit {

  invoice$!: Observable<Invoice | undefined>;
  showModal: boolean = false;
  currentInvoice!: Invoice;
  invoiceId!: string;

  @Input() invoice!: Invoice;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>,
  ) {}

  goToPrevious() {
    this.router.navigate([''])
  }

  ngOnInit() {
    this.invoiceId = this.route.snapshot.paramMap.get('id')!;

    if(this.invoiceId) {
      this.invoice$ = this.store.select(selectInvoiceById(this.invoiceId));
    }

    this.store.select(selectAllInvoices).subscribe((invoice) => {
      if (invoice.length === 0) {
        this.store.dispatch(loadInvoice());
      }
    });


    this.invoice$.subscribe((invoice) => {
      if (invoice) {
        this.currentInvoice = invoice;
      }
    });
  }
    
  

  handleDeleteClick() {
    this.showModal = true; 
  }

  onMarkAsPaid(invoiceId: string) {
    const newStatus =
      this.currentInvoice.status === 'pending' ? 'paid' : 'pending';
    this.store.dispatch(updateInvoiceStatus({ id: invoiceId, status: newStatus }));
  }

  closeModal() {
    this.showModal = false;
  }
}
