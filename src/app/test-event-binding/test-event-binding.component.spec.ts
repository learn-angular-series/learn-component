import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEventBindingComponent } from './test-event-binding.component';

describe('TestEventBindingComponent', () => {
  let component: TestEventBindingComponent;
  let fixture: ComponentFixture<TestEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
