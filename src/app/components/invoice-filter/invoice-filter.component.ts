import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-filter',
  standalone: true,
  imports: [],
  templateUrl: './invoice-filter.component.html',
  styleUrl: './invoice-filter.component.css'
})
export class InvoiceFilterComponent {
  showDropDown: boolean = false;
  // emit click event to parent component
  @Output()
  filterClicked = new EventEmitter<void>();


  // toggle drop down menu
  displayDropDown() {
    this.showDropDown = !this.showDropDown;
    this.filterClicked.emit();
  }
}
