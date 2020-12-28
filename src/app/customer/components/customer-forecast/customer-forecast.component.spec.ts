import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForecastComponent } from './customer-forecast.component';

describe('CustomerForecastComponent', () => {
  let component: CustomerForecastComponent;
  let fixture: ComponentFixture<CustomerForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
