import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildThreeComponent } from './child-three.component';

describe('ChildThreeComponent', () => {
  let component: ChildThreeComponent;
  let fixture: ComponentFixture<ChildThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
