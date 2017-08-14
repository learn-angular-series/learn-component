import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAttributeDirectiveComponentComponent } from './test-attribute-directive-component.component';

describe('TestAttributeDirectiveComponentComponent', () => {
  let component: TestAttributeDirectiveComponentComponent;
  let fixture: ComponentFixture<TestAttributeDirectiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAttributeDirectiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAttributeDirectiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
