import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgForComponent } from './test-ng-for.component';

describe('TestNgForComponent', () => {
  let component: TestNgForComponent;
  let fixture: ComponentFixture<TestNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
