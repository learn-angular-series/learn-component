import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgStyleComponentComponent } from './test-ng-style-component.component';

describe('TestNgStyleComponentComponent', () => {
  let component: TestNgStyleComponentComponent;
  let fixture: ComponentFixture<TestNgStyleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgStyleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgStyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
