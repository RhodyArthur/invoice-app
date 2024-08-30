import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private isModalVisibleSubject = new BehaviorSubject<boolean>(false);
  isModalVisible$ = this.isModalVisibleSubject.asObservable();

  // display modal
  show() {
    this.isModalVisibleSubject.next(true);
  }

  // hide modal
  hide() {
    this.isModalVisibleSubject.next(false);
  }
}
