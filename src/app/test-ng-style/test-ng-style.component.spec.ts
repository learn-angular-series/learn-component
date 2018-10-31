import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgStyleComponent } from './test-ng-style.component';

describe('TestNgStyleComponent', () => {
  let component: TestNgStyleComponent;
  let fixture: ComponentFixture<TestNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNgStyleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
