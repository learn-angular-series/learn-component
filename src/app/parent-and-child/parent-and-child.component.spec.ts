import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenetAndChildComponent } from './parenet-and-child.component';

describe('ParenetAndChildComponent', () => {
  let component: ParenetAndChildComponent;
  let fixture: ComponentFixture<ParenetAndChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenetAndChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenetAndChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
