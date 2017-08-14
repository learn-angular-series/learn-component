import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgModelComponent } from './test-ng-model.component';

describe('TestNgModelComponent', () => {
  let component: TestNgModelComponent;
  let fixture: ComponentFixture<TestNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
