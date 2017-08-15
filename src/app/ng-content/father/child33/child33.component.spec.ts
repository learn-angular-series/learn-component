import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child33Component } from './child33.component';

describe('Child33Component', () => {
  let component: Child33Component;
  let fixture: ComponentFixture<Child33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
