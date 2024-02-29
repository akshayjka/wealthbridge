import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVsWealth2Component } from './full-vs-wealth2.component';

describe('FullVsWealth2Component', () => {
  let component: FullVsWealth2Component;
  let fixture: ComponentFixture<FullVsWealth2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullVsWealth2Component]
    });
    fixture = TestBed.createComponent(FullVsWealth2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
