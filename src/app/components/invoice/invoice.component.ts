import { Component, OnInit } from '@angular/core';
import { InvoiceListComponent } from "../invoice-list/invoice-list.component";
import { InvoiceFilterComponent } from "../invoice-filter/invoice-filter.component";
import { InvoiceNewButtonComponent } from "../invoice-new-button/invoice-new-button.component";
import { Observable } from 'rxjs';
import { AppState, Invoice } from '../../interface/invoice';
import { Store } from '@ngrx/store';
import { loadInvoice } from '../../store/invoice.actions';
import { selectAllInvoices } from '../../store/invoice.selectors';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceListComponent, InvoiceFilterComponent, InvoiceNewButtonComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{
  currentStatuses: string[] = [];
  invoice$: Observable<Invoice[]> = this.store.select(selectAllInvoices); 

  // handle evnt emitter from filter component
  handleFilterClicked() {
    console.log('Filter clicked in child')
  }


  // handle status change from the filter component
  onStatusChange(statuses: string[]) {
    this.currentStatuses = statuses;
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadInvoice())
  }
}
