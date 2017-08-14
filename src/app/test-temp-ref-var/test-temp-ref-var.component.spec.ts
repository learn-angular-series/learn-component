import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTempRefVarComponent } from './test-temp-ref-var.component';

describe('TestTempRefVarComponent', () => {
  let component: TestTempRefVarComponent;
  let fixture: ComponentFixture<TestTempRefVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTempRefVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTempRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
