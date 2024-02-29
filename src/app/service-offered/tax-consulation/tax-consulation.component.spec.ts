import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxConsulationComponent } from './tax-consulation.component';

describe('TaxConsulationComponent', () => {
  let component: TaxConsulationComponent;
  let fixture: ComponentFixture<TaxConsulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxConsulationComponent]
    });
    fixture = TestBed.createComponent(TaxConsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
