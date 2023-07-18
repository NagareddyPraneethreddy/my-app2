import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucutralDirectivesComponent } from './strucutral-directives.component';

describe('StrucutralDirectivesComponent', () => {
  let component: StrucutralDirectivesComponent;
  let fixture: ComponentFixture<StrucutralDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrucutralDirectivesComponent]
    });
    fixture = TestBed.createComponent(StrucutralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
