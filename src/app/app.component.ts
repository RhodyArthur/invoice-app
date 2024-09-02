import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ModalComponent } from "./components/modal/modal.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { InvoiceFormComponent } from "./components/invoice-form/invoice-form.component";
import { ModalService } from './services/modal.service';
import { AppState, Invoice } from './interface/invoice';
import { map, Observable, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectInvoiceById } from './store/invoice.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ModalComponent, InvoiceListComponent, InvoiceComponent, InvoiceFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'invoice-app';


  isFormVisible$: Observable<boolean>;
  formData$: Observable<Invoice | undefined>;

  constructor(private modalService: ModalService,
          private store: Store<AppState>) {
    // track modal visibility
    this.isFormVisible$ = this.modalService.modalState$.pipe(
      map(state => state.visible))

    // track modal data
    this.formData$ = this.modalService.modalState$.pipe(
      map(state => state.data)
    ) 
          }

    ngOnInit() {
    }
  }


