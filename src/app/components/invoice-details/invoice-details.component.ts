import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState, Invoice } from '../../interface/invoice';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectInvoiceById } from '../../store/invoice.selectors';
import { CommonModule } from '@angular/common';
import { StatusComponent } from "../status/status.component";
import { ButtonComponent } from "../button/button.component";
import { ModalComponent } from "../modal/modal.component";
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [CommonModule, StatusComponent, ButtonComponent, ModalComponent],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent implements OnInit {

  invoice$!: Observable<Invoice | undefined>;
  isModalVisible:boolean = false;

  @Input() invoice!: Invoice;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>,
              private modalService: ModalService
  ) {}

  goToPrevious() {
    this.router.navigate([''])
  }

  ngOnInit() {
    const invoiceId = this.route.snapshot.paramMap.get('id');

    if(invoiceId) {
      this.invoice$ = this.store.select(selectInvoiceById(invoiceId));
    }

    // display modal
    this.modalService.isModalVisible$.subscribe(isVisible => {
      this.isModalVisible = isVisible;
    })
    
  }

}
