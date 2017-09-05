import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponent } from './ng-content.component';

describe('NgContentComponent', () => {
  let component: NgContentComponent;
  let fixture: ComponentFixture<NgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
