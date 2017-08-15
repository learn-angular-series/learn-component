import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlyInComponent } from './test-fly-in.component';

describe('TestFlyInComponent', () => {
  let component: TestFlyInComponent;
  let fixture: ComponentFixture<TestFlyInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFlyInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFlyInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
