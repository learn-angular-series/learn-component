import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPipeComponent } from './test-pipe.component';

describe('TestPipeComponent', () => {
  let component: TestPipeComponent;
  let fixture: ComponentFixture<TestPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
