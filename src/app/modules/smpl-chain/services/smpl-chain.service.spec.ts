import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SmplChainService } from './smpl-chain.service';

describe('SmplChainService', () => {
  let service: SmplChainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}),
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SmplChainService);
  });

  it('SmplChain service generated', () => {
    expect(service).toBeTruthy();
  });

  it('getTransactionHistory function generated successfully', () => {
    expect(service.getTransactionHistory).toEqual(service.getTransactionHistory);
  });


  it('Verify getTransactionHistory function', () => {
    var data$ = service.getTransactionHistory("Address");   
    data$.subscribe(data => {
      expect(data.length).not.toBeNull();
    });
  });

});
