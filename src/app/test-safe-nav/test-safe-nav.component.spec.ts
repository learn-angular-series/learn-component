import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSafeNavComponent } from './test-safe-nav.component';

describe('TestSafeNavComponent', () => {
  let component: TestSafeNavComponent;
  let fixture: ComponentFixture<TestSafeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSafeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSafeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
