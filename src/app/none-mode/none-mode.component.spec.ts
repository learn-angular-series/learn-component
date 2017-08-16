import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneModeComponent } from './none-mode.component';

describe('NoneModeComponent', () => {
  let component: NoneModeComponent;
  let fixture: ComponentFixture<NoneModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
