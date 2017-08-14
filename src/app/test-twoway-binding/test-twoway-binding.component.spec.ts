import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwowayBindingComponent } from './test-twoway-binding.component';

describe('TestTwowayBindingComponent', () => {
  let component: TestTwowayBindingComponent;
  let fixture: ComponentFixture<TestTwowayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTwowayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
