import { Action, createReducer, on } from "@ngrx/store";
import { Invoice } from "../interface/invoice";
import { loadInvoice, loadInvoiceFailure, loadInvoiceSuccess } from "./invoice.actions";

// define the shape
export interface InvoiceState{
    invoice: Invoice[]
    error: string | null
}

// set initial state
export const initialState: InvoiceState = {
    invoice: [],
    error: null
}

// create reducer
export const invoiceReducer = createReducer(
    initialState,
    on(loadInvoice, state => ({...state})),

    on(loadInvoiceSuccess, (state, {invoice}) => ({...state, invoice, error: null})),

    on(loadInvoiceFailure, (state, {error}) => ({...state, error}))

)
