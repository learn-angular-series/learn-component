import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child22Component } from './child22.component';

describe('Child22Component', () => {
  let component: Child22Component;
  let fixture: ComponentFixture<Child22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
