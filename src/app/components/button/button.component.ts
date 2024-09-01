import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Invoice } from '../../interface/invoice';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() invoice!: Invoice;
  @Output() deleteClick = new EventEmitter<void>();
  @Output() markAsPaid = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  displayDelete() {
    this.deleteClick.emit();
  }


  // display edit form 
  displayEditForm() {
    this.modalService.show();
  }

  onMarkAsPaid() {
    this.markAsPaid.emit()
  }

  getMarkBtnText(): string {
    if(!this.invoice) {
      return ''
    }
    return this.invoice.status === 'pending' ? 'Mark As Paid' : 'Mark As Pending'
  }
}
