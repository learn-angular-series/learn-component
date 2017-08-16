import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViewChildComponent } from './test-view-child.component';

describe('TestViewChildComponent', () => {
  let component: TestViewChildComponent;
  let fixture: ComponentFixture<TestViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
