import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setSelectedStatus } from '../../store/invoice.actions';

@Component({
  selector: 'app-invoice-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-filter.component.html',
  styleUrl: './invoice-filter.component.css'
})
export class InvoiceFilterComponent {
  showDropDown: boolean = false;
  selectedStatuses: string[] = [];

  // status
  statuses: string[] = [ 'draft', 'pending', 'paid']

  // emit click event to parent component
  @Output() filterClicked = new EventEmitter<void>();

  // emit selected status to invoice list component 
  @Output() status = new EventEmitter<string[]>();

  constructor(private store: Store) {}

  // toggle drop down menu
  displayDropDown() {
    this.showDropDown = !this.showDropDown;
    this.filterClicked.emit();
  }

  // get selected status
  getSelectedStatus(status: string) {
    this.selectedStatuses = this.selectedStatuses.includes(status) ? this.selectedStatuses.filter(s => s !== status) : [...this.selectedStatuses, status]
    this.store.dispatch(setSelectedStatus({selectedStatuses: this.selectedStatuses}));
    this.status.emit(this.selectedStatuses);
  }

}
