import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgContentComponent } from './test-ng-content.component';

describe('TestNgContentComponent', () => {
  let component: TestNgContentComponent;
  let fixture: ComponentFixture<TestNgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
