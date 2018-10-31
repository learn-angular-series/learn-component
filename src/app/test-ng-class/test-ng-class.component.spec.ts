import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgClassComponent } from './test-ng-class.component';

describe('TestNgClassComponent', () => {
  let component: TestNgClassComponent;
  let fixture: ComponentFixture<TestNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNgClassComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
