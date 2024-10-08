import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../interface/invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private jsonUrl = 'assets/data.json'

  getInvoiceData(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.jsonUrl);
  }

  // save data to backend
  saveInvoiceData(invoiceId: string | number, changes: Partial<Invoice>) {
    const url = `${this.jsonUrl}/${invoiceId}`;
    return this.http.put(url, changes)
  }
}
