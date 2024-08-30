import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, Invoice } from '../../interface/invoice';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectInvoiceById } from '../../store/invoice.selectors';
import { CommonModule } from '@angular/common';
import { StatusComponent } from "../status/status.component";

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [CommonModule, StatusComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent implements OnInit {

  invoice$!: Observable<Invoice | undefined>;

  @Input() invoice!: Invoice;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>
  ) {}

  goToPrevious() {
    this.router.navigate([''])
  }

  ngOnInit() {
    const invoiceId = this.route.snapshot.paramMap.get('id');

    if(invoiceId) {
      this.invoice$ = this.store.select(selectInvoiceById(invoiceId));
    }
  }
}
