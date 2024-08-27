import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceNewButtonComponent } from './invoice-new-button.component';

describe('InvoiceNewButtonComponent', () => {
  let component: InvoiceNewButtonComponent;
  let fixture: ComponentFixture<InvoiceNewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceNewButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
