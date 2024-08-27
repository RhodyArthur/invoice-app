import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Invoice } from '../../interface/invoice';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  invoiceData: Invoice[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getInvoiceData()
    .subscribe(data => {
        this.invoiceData = data;
        console.log(data)
      }
    )
  }
}
