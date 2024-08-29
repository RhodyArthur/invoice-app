import { Component, Inject, Input, LOCALE_ID, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState, Invoice } from '../../interface/invoice';
import { select, Store } from '@ngrx/store';
import { selectAllInvoices, selectFilteredInvoice } from '../../store/invoice.selectors';
import { loadInvoice, loadInvoiceSuccess, setSelectedStatus } from '../../store/invoice.actions';
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

  @Input() selectedStatuses: string[] = [];

  ngOnInit(): void {
    this.store.dispatch(loadInvoice())
  }
 
  constructor(private store: Store<AppState>) {
    this.invoices$ = store.select(selectFilteredInvoice);
  }



}
