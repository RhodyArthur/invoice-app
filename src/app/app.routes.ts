import { Routes } from '@angular/router';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

export const routes: Routes = [
    {path: '', title: 'Invoice List', component: InvoiceComponent},
    {path: 'details/:id', title: 'Invoice Details', component: InvoiceDetailsComponent}
];
