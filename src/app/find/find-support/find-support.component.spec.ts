import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSupportComponent } from './find-support.component';

describe('FindSupportComponent', () => {
  let component: FindSupportComponent;
  let fixture: ComponentFixture<FindSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindSupportComponent]
    });
    fixture = TestBed.createComponent(FindSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
