import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinComponent } from './fin.component';

describe('FinComponent', () => {
  let component: FinComponent;
  let fixture: ComponentFixture<FinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinComponent]
    });
    fixture = TestBed.createComponent(FinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
