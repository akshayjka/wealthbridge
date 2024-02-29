import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialManagementComponent } from './financial-management.component';

describe('FinancialManagementComponent', () => {
  let component: FinancialManagementComponent;
  let fixture: ComponentFixture<FinancialManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialManagementComponent]
    });
    fixture = TestBed.createComponent(FinancialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
