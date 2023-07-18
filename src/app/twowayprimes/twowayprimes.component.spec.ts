import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayprimesComponent } from './twowayprimes.component';

describe('TwowayprimesComponent', () => {
  let component: TwowayprimesComponent;
  let fixture: ComponentFixture<TwowayprimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayprimesComponent]
    });
    fixture = TestBed.createComponent(TwowayprimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
