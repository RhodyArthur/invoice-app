import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-invoice-new-button',
  standalone: true,
  imports: [],
  templateUrl: './invoice-new-button.component.html',
  styleUrl: './invoice-new-button.component.css'
})
export class InvoiceNewButtonComponent {
  
  constructor(private modalService: ModalService) {}

  displayForm() {
    this.modalService.show()
  }

}
