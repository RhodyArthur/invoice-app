import { Component } from '@angular/core';
import { InvoiceListComponent } from "../invoice-list/invoice-list.component";
import { InvoiceFilterComponent } from "../invoice-filter/invoice-filter.component";
import { InvoiceNewButtonComponent } from "../invoice-new-button/invoice-new-button.component";

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceListComponent, InvoiceFilterComponent, InvoiceNewButtonComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  // handle evnt emitter from filter component
  handleFilterClicked() {
    console.log('Filter clicked in child')
  }
}
