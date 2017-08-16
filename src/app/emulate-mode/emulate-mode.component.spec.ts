import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulateModeComponent } from './emulate-mode.component';

describe('EmulateModeComponent', () => {
  let component: EmulateModeComponent;
  let fixture: ComponentFixture<EmulateModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulateModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulateModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
