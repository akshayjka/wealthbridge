import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVsWealthComponent } from './full-vs-wealth.component';

describe('FullVsWealthComponent', () => {
  let component: FullVsWealthComponent;
  let fixture: ComponentFixture<FullVsWealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullVsWealthComponent]
    });
    fixture = TestBed.createComponent(FullVsWealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
