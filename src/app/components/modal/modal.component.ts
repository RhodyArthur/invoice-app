import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{
  
    @Input() visible: boolean = false;
    @Output() close = new EventEmitter<void>();

  constructor(public modalService: ModalService) {}

  ngOnInit() {
  }

  confirmDelete() {
    this.closeModal()
  }

  closeModal() {
    this.close.emit(); 
  }



}
