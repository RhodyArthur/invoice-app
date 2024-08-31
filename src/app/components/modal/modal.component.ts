import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Store } from '@ngrx/store';
import { deleteInvoice } from '../../store/invoice.actions';
import { AppState, Invoice } from '../../interface/invoice';
import { Observable } from 'rxjs';
import { selectInvoiceById } from '../../store/invoice.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  
    @Input() visible: boolean = false;
    @Output() close = new EventEmitter<void>();

    @Input() invoice!: Invoice;

    invoice$!: Observable<Invoice | undefined>

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const invoiceId = this.route.snapshot.paramMap.get('id');

    if(invoiceId) {
      this.invoice$ = this.store.select(selectInvoiceById(invoiceId));
    }

  }

  
  closeModal() {
    this.close.emit(); 
  }

  confirmDelete(id: string) {
    this.store.dispatch(deleteInvoice({ id }));
    this.closeModal()
  }



}
