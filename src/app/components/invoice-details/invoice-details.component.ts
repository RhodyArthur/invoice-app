import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent {

  constructor(private router: Router) {}

  goToPrevious() {
    this.router.navigate([''])
  }
}
