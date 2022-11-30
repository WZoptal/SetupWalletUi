import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TermsAndPrivacyGuardGuard } from './terms-and-privacy-guard.guard';

describe('TermsAndPrivacyGuardGuard', () => {
  let guard: TermsAndPrivacyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    guard = TestBed.inject(TermsAndPrivacyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
