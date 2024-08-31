import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() deleteClick = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  displayDelete() {
    this.deleteClick.emit();
  }
}
