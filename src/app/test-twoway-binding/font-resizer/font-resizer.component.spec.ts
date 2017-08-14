import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontResizerComponent } from './font-resizer.component';

describe('FontResizerComponent', () => {
  let component: FontResizerComponent;
  let fixture: ComponentFixture<FontResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
