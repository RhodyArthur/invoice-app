import { createAction, props } from "@ngrx/store";
import { Invoice } from "../interface/invoice";
import { Update } from "@ngrx/entity";

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


// set selected status
export const setSelectedStatus = createAction('[Invoice] Set Status',
    props<{selectedStatuses: string[]}>()
);


// add invoice
export const addInvoice = createAction('[Invoice] Add Invoice',
    props<{invoice: Invoice}>()
);

// update invoice
export const updateInvoice = createAction(
    '[Invoice] Update Invoice',
    props<{ invoice: Partial<Invoice> & { id: string } }>()
  );

export const invoiceUpdated = createAction(
    '[Invoice] Invoice Updated',
    props<{update: Update<Invoice>}>()
)

  export const deleteInvoice = createAction(
    '[Invoice] Delete Invoice',
    props<{ id: string }>()
  );

export const updateInvoiceStatus = createAction(
    '[Invoice] Update Invoice Status',
    props<{ id: string; status: 'pending' | 'paid' }>()
);