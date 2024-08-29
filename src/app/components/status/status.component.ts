import { Component, Input } from '@angular/core';
import { Invoice } from '../../interface/invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  // get invoice from parent (invoice)
  @Input() invoice!: Invoice;

}
