import { createSelector } from '@ngrx/store';
import { AppState, Invoice } from '../interface/invoice';
import { InvoiceState } from '../interface/invoice'

// Selector to get the invoices feature from the state
export const selectInvoiceState = (state: AppState) => {
  return state.invoice;
};

// get list of invoices
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoice
);

// get selected status
export const selectStatus = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.selectedStatus
)

// get filtered invoices based on status
export const selectInvoiceStatus = createSelector(
  selectStatus,
  selectAllInvoices,
  (selectedStatus: string | null, allInvoices: Invoice[]) => {
    if (selectedStatus && allInvoices) {
      return allInvoices.filter((invoice: Invoice) => invoice.status === selectedStatus)
    }
    return allInvoices;
  }
);
