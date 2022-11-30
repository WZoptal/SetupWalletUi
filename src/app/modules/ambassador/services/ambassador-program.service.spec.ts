import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AmbassadorProgramService } from './ambassador-program.service';

describe('AmbassadorProgramService', () => {
  let service: AmbassadorProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, StoreModule.forRoot({}), RouterTestingModule ],
    });
    service = TestBed.inject(AmbassadorProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
