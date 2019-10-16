import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutbuttonComponent } from './checkoutbutton.component';

describe('CheckoutbuttonComponent', () => {
  let component: CheckoutbuttonComponent;
  let fixture: ComponentFixture<CheckoutbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
