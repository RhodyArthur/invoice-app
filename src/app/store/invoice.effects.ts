import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { invoiceUpdated, loadInvoice, loadInvoiceSuccess } from './invoice.actions';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';
import { DataService } from '../services/data.service';
@Injectable()
export class InvoiceEffects {
  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoice),
      switchMap(() =>
        this.dataService.getInvoiceData().pipe(
          map((invoice) => loadInvoiceSuccess({ invoice })),
          catchError((error) =>
            of({
              type: '[Invoice] Invoices Loaded Error',
            })
          )
        )
      )
    )
  );

  saveInvoice$ = createEffect(() => 
    this.actions$.pipe(
      ofType(invoiceUpdated),
      concatMap(action => this.dataService.saveInvoiceData(
        action.update.id,
        action.update.changes
      ))
    ),
    {dispatch:false}
  )

  constructor(private actions$: Actions, private dataService: DataService) {}
}
