import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomModeComponent } from './shadow-dom-mode.component';

describe('ShadowDomModeComponent', () => {
  let component: ShadowDomModeComponent;
  let fixture: ComponentFixture<ShadowDomModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDomModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDomModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
