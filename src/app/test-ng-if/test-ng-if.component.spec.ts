import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgIfComponent } from './test-ng-if.component';

describe('TestNgIfComponent', () => {
  let component: TestNgIfComponent;
  let fixture: ComponentFixture<TestNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
