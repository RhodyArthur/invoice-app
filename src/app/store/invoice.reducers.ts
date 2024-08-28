import { Action, createReducer, on } from "@ngrx/store";
import { Invoice } from "../interface/invoice";
import { loadInvoice, loadInvoiceFailure, loadInvoiceSuccess } from "./invoice.actions";
// define the shape
import { InvoiceState } from "../interface/invoice";


// set initial state
export const initialState: InvoiceState = {
    invoice: [],
    error: null,
    selectedStatus: null
}

// create reducer
export const invoiceReducer = createReducer(
    initialState,
    
    on(loadInvoice, state => ({...state})),

    on(loadInvoiceSuccess, (state, {invoice}) => ({...state, invoice})),

    on(loadInvoiceFailure, (state, {error}) => ({...state, error}))
)