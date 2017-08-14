import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalChild1Component } from './local-child1.component';

describe('LocalChild1Component', () => {
  let component: LocalChild1Component;
  let fixture: ComponentFixture<LocalChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
