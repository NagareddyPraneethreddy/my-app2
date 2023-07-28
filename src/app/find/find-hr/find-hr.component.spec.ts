import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHrComponent } from './find-hr.component';

describe('FindHrComponent', () => {
  let component: FindHrComponent;
  let fixture: ComponentFixture<FindHrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindHrComponent]
    });
    fixture = TestBed.createComponent(FindHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
