import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVsWealth3Component } from './full-vs-wealth3.component';

describe('FullVsWealth3Component', () => {
  let component: FullVsWealth3Component;
  let fixture: ComponentFixture<FullVsWealth3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullVsWealth3Component]
    });
    fixture = TestBed.createComponent(FullVsWealth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
