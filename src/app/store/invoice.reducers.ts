import { createReducer, on } from "@ngrx/store";
import { Invoice } from "../interface/invoice";
import { loadInvoice } from "./invoice.actions";

// define the shape
export interface InvoiceState{
    invoice: Invoice[]
}

// set initial state
export const initialState: InvoiceState = {
    invoice: [],
}

// create reducer
export const invoiceReducer = createReducer(
    initialState,
    on(loadInvoice, state => ({...state}))
)