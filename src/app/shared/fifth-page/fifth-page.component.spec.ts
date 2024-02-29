import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthPageComponent } from './fifth-page.component';

describe('FifthPageComponent', () => {
  let component: FifthPageComponent;
  let fixture: ComponentFixture<FifthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifthPageComponent]
    });
    fixture = TestBed.createComponent(FifthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
