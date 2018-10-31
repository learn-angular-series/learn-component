import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAndChildComponent } from './parent-and-child.component';

describe('ParentAndChildComponent', () => {
  let component: ParentAndChildComponent;
  let fixture: ComponentFixture<ParentAndChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParentAndChildComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAndChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
