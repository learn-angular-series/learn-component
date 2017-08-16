import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCompComponent } from './dynamic-comp.component';

describe('DynamicCompComponent', () => {
  let component: DynamicCompComponent;
  let fixture: ComponentFixture<DynamicCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
