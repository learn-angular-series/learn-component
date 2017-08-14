import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValueBindComponent } from './test-value-bind.component';

describe('TestValueBindComponent', () => {
  let component: TestValueBindComponent;
  let fixture: ComponentFixture<TestValueBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestValueBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValueBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
