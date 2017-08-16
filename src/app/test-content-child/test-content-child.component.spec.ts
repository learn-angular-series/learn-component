import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContentChildComponent } from './test-content-child.component';

describe('TestContentChildComponent', () => {
  let component: TestContentChildComponent;
  let fixture: ComponentFixture<TestContentChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContentChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
