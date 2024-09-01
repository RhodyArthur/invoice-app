import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Invoice } from "../interface/invoice";

export interface InvoiceState extends EntityState<Invoice> {
    invoice: Invoice[]
    error: string | null
    selectedStatuses: string[]
} 

export const adapter = createEntityAdapter<Invoice> ({
    selectId: (invoice: Invoice) => invoice.id,
    sortComparer: false
})

// set initial value
export const initialInvoicesState:InvoiceState = adapter.getInitialState({
    invoice: [],
    error: null,
    selectedStatuses: []
})
