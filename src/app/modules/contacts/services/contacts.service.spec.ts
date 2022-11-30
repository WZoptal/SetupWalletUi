import { TestBed, inject } from '@angular/core/testing';

import { ContactsService } from './contacts.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpEvent, HttpEventType} from "@angular/common/http";

describe('ContactManagementService', () => {
  let service: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactsService]
    });

    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
