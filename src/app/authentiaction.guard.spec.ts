import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authentiactionGuard } from './authentiaction.guard';

describe('authentiactionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authentiactionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
