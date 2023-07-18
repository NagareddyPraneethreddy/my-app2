import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluculatorComponent } from './caluculator.component';

describe('CaluculatorComponent', () => {
  let component: CaluculatorComponent;
  let fixture: ComponentFixture<CaluculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaluculatorComponent]
    });
    fixture = TestBed.createComponent(CaluculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
