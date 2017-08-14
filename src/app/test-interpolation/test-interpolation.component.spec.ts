import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInterpolationComponent } from './test-interpolation.component';

describe('TestInterpolationComponent', () => {
  let component: TestInterpolationComponent;
  let fixture: ComponentFixture<TestInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
