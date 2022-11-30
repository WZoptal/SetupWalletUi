import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HandleGuard } from './handle.guard';

describe('HandleGuard', () => {
  let guard: HandleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    guard = TestBed.inject(HandleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
