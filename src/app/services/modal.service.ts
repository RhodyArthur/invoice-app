import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Invoice } from '../interface/invoice';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modalStateSubject = new BehaviorSubject<{visible: boolean, data?: Invoice}>({visible:false});
  modalState$ = this.modalStateSubject.asObservable();

  // display modal
  show(data?: Invoice) {
    this.modalStateSubject.next({visible:true, data});
  }

  // hide modal
  hide() {
    this.modalStateSubject.next({visible: false});
  }
}
