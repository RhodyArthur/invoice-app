import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Invoice } from '../interface/invoice';
import { InvoiceState } from './invoice.state'
import { adapter } from './invoice.state';

// Selector to get the invoices feature from the state
export const selectInvoiceState = createFeatureSelector<InvoiceState>("invoice");

export const { selectAll, selectEntities, selectIds, selectTotal } = adapter.getSelectors();

// get list of invoices
export const selectAllInvoices = createSelector(
  selectInvoiceState,
  selectAll
);

// Get invoice entities
export const selectInvoiceEntities = createSelector(
  selectInvoiceState,
  selectEntities
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
  (  selectedStatuses: string[], allInvoices: Invoice[],) => {
    if (selectedStatuses.length > 0) {
      return allInvoices.filter(invoice => selectedStatuses.includes(invoice.status));
    }
    return allInvoices;
  })

// Get invoice by ID
export const selectInvoiceById = (invoiceId: string) => createSelector(
  selectInvoiceEntities,
  (entities) => entities[invoiceId]
);