import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneComponentComponent } from './standalone-component.component';

describe('StandaloneComponentComponent', () => {
  let component: StandaloneComponentComponent;
  let fixture: ComponentFixture<StandaloneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
