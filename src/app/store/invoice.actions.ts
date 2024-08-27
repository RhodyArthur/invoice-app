import { createAction, props } from "@ngrx/store";
import { Invoice } from "../interface/invoice";

// action without payload
// load invoice action
export const loadInvoice = createAction('[Invoice] Load Invoices');

// actions with payload
// successfully load data
export const loadInvoiceSuccess = createAction('[Invoice] Invoices Loaded Success',
    props<{invoice: Invoice[]}>()
);

// error
export const loadInvoiceFailure = createAction('[Invoice] Invoices Loaded Error',
    props<{error: any}>()
);