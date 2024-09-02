import { createReducer, on } from '@ngrx/store';
import { addInvoice, deleteInvoice, loadInvoice, loadInvoiceFailure, loadInvoiceSuccess, setSelectedStatus, updateInvoice, updateInvoiceStatus } from './invoice.actions';
import { initialInvoicesState, adapter } from './invoice.state';

// Create reducer
export const invoiceReducer = createReducer(
  initialInvoicesState,

  on(loadInvoice, state => ({ ...state })),

  on(loadInvoiceSuccess, (state, { invoice }) => adapter.setAll(invoice, state)),

  on(loadInvoiceFailure, (state, { error }) => ({ ...state, error })),

  on(setSelectedStatus, (state, { selectedStatuses }) => ({ ...state, selectedStatuses })),

  on(addInvoice, (state, { invoice }) => adapter.addOne(invoice, state)),

  on(updateInvoice, (state, { invoice }) => adapter.updateOne({ id: invoice.id, changes: invoice }, state)),

  on(deleteInvoice, (state, { id }) => adapter.removeOne(id, state)),

  on(updateInvoiceStatus, (state, { id, status }) => adapter.updateOne({ id, changes: { status } }, state))
);
