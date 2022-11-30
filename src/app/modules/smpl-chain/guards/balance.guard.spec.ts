import { TestBed } from '@angular/core/testing';

import { BalanceGuard } from './balance.guard';

describe('BalanceGuard', () => {
  let guard: BalanceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BalanceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
