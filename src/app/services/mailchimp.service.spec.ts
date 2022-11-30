import {TestBed} from '@angular/core/testing';

import {MailchimpService} from './mailchimp.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('MailchimpService', () => {
  let service: MailchimpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MailchimpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should make correct mailchimp call',
    () => {
      service.addUserToList('bob@bob.com', [1, 2]).subscribe(res => expect(res).toBeTruthy());

      const testRequest = httpMock.expectOne('https://smplecosystem.us14.list-manage.com/subscribe/post-json?EMAIL=bob@bob.com&tags=1,2&b_5830e8e1f7ece32ed585ac3f5_f1c86aae6d=&u=5830e8e1f7ece32ed585ac3f5&id=f1c86aae6d&c=JSONP_CALLBACK')

      expect(testRequest.cancelled).toBeFalsy();
      expect(testRequest.request.responseType).toEqual('json');

      httpMock.verify();
    }
  )
});
