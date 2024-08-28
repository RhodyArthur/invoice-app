import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, Invoice } from '../../interface/invoice';
import { select, Store } from '@ngrx/store';
import { selectAllInvoices } from '../../store/invoice.selectors';
import { loadInvoice, loadInvoiceSuccess } from '../../store/invoice.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{
  invoices$: Observable<Invoice[]>;

  ngOnInit(): void {
    this.store.dispatch(loadInvoice())

  }
 
  constructor(private store: Store<AppState>) {
    this.invoices$ = store.pipe(select(selectAllInvoices))
  }

  
}
