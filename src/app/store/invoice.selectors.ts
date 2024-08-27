import { createSelector } from '@ngrx/store';
import { AppState, Invoice } from '../interface/invoice';
import { InvoiceState } from './invoice.reducers';

// Selector to get the invoices feature from the state
export const selectInvoiceState = (state: AppState) => {
  console.log('Current state:', state);
  return state.invoice;
};

// get list of invoices
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoice
);
