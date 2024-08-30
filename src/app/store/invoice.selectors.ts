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
  (state: InvoiceState) => state.selectedStatuses
)

// get filtered invoices based on status
export const selectFilteredInvoice = createSelector(
  selectStatus,
  selectAllInvoices,
  (selectedStatuses: string[], allInvoices: Invoice[]) => {
    if (selectedStatuses.length > 0) {
      return allInvoices.filter(invoice => selectedStatuses.includes(invoice.status));
    }
    return allInvoices;
  })

// get invoice by id
export const selectInvoiceById = (invoiceId: string) => createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoice.find(invoice => invoice.id === invoiceId)
)