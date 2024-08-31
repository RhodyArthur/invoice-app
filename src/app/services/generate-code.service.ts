import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateCodeService {
  private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numbers = '0123456789';
  private invoiceIds: Set<string> = new Set();

  constructor() { }

  generateUniqueId(): string {
    let uniqueId: string;
    do {
      uniqueId = this.createRandomId();
    }
    while (this.invoiceIds.has(uniqueId));

    this.invoiceIds.add(uniqueId);
    return uniqueId;
  }

  private createRandomId(): string {
    const alphaPart = this.getRandomString(this.characters, 2);
    const numberPart = this.getRandomString(this.numbers, 4);
    return `${alphaPart}${numberPart}`;
  }

  private getRandomString(chars: string, length: number): string {
    let result = '';
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
