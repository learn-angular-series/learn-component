import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleComponent } from './life-cycle.component';

describe('LifeCycleComponent', () => {
  let component: LifeCycleComponent;
  let fixture: ComponentFixture<LifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
