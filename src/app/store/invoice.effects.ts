import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadInvoice, loadInvoiceSuccess } from './invoice.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { DataService } from '../services/data.service';
@Injectable()
export class InvoiceEffects {
  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoice),
      exhaustMap(() =>
        this.dataService.getInvoiceData().pipe(
          map((invoice) => loadInvoiceSuccess({ invoice })),
          catchError(() =>
            of({
              type: '[Invoice] Invoices Loaded Error',
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
