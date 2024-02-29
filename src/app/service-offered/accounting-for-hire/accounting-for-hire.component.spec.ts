import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingForHireComponent } from './accounting-for-hire.component';

describe('AccountingForHireComponent', () => {
  let component: AccountingForHireComponent;
  let fixture: ComponentFixture<AccountingForHireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingForHireComponent]
    });
    fixture = TestBed.createComponent(AccountingForHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
