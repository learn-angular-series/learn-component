import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgOnChangesComponent } from './test-ng-on-changes.component';

describe('TestNgOnChangesComponent', () => {
  let component: TestNgOnChangesComponent;
  let fixture: ComponentFixture<TestNgOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgOnChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
