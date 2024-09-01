import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ModalComponent } from "./components/modal/modal.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { InvoiceFormComponent } from "./components/invoice-form/invoice-form.component";
import { ModalService } from './services/modal.service';
import { Invoice } from './interface/invoice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ModalComponent, InvoiceListComponent, InvoiceComponent, InvoiceFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'invoice-app';
  @Input() invoice!: Invoice
  isFormVisible: boolean = false;

  ngOnInit() {
    this.modalService.isModalVisible$.subscribe(isVisible => {
      this.isFormVisible = isVisible
      console.log(this.invoice)
    })
  }

  constructor(private modalService: ModalService) {}
}
