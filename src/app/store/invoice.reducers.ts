import { Action, createReducer, on } from "@ngrx/store";
import { Invoice } from "../interface/invoice";
import { addInvoice, deleteInvoice, loadInvoice, loadInvoiceFailure, loadInvoiceSuccess, setSelectedStatus, updateInvoice } from "./invoice.actions";
// define the shape
import { InvoiceState } from "../interface/invoice";

import { initialInvoicesState, adapter } from "./invoice.state";
import { selectAllInvoices, selectInvoiceState } from "./invoice.selectors";

// set initial state
// export const initialState: InvoiceState = {
//     invoice: [],
//     error: null,
//     selectedStatuses: []
// }

// create reducer
export const invoiceReducer = createReducer(
    initialInvoicesState,
    
    on(loadInvoice, state => ({...state})),

    on(loadInvoiceSuccess, (state, {invoice}) => adapter.setAll(invoice, {...state})),

    on(loadInvoiceFailure, (state, {error}) => ({...state, error})),
 
    on(setSelectedStatus, (state, {selectedStatuses}) => ({ ...state, selectedStatuses })),

    on(addInvoice, (state, {invoice}) => adapter.addOne(invoice, {...state})),

    on(updateInvoice, (state, {invoice}) => adapter.updateOne({id: invoice.id, changes:invoice}, state)),

    on(deleteInvoice, (state, { id }) => adapter.removeOne(id, state))
)

