import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgSwitchComponent } from './test-ng-switch.component';

describe('TestNgSwitchComponent', () => {
  let component: TestNgSwitchComponent;
  let fixture: ComponentFixture<TestNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
