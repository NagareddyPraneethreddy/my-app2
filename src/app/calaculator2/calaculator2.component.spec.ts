import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calaculator2Component } from './calaculator2.component';

describe('Calaculator2Component', () => {
  let component: Calaculator2Component;
  let fixture: ComponentFixture<Calaculator2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Calaculator2Component]
    });
    fixture = TestBed.createComponent(Calaculator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
