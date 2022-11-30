import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {ProfileDto} from 'src/app/modules/contacts/models/profile.dto';
import {iif, map, mergeMap, Observable, of, tap} from 'rxjs';
import {PaginatedResponseDto} from "src/app/models/paginated-response.dto";
import {PageRequestDto} from "src/app/models/page-request.dto";
import { HandlesMapResponseDto } from 'src/app/modules/contacts/models/handles-map-response.dto';
import { HandlesMapRequestDto } from 'src/app/modules/contacts/models/handles-map-request.dto';
import {PaginatedContactsRequestDto} from "../models/paginated-contacts-request.dto";
import {AddContactRequestDto} from "../models/add-contact-request.dto";
import {RemoveContactRequestDto} from "../models/remove-contact-request.dto";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = environment.contactsManagementServiceUrl;
  basePath = '/smpl-contacts-mgmt-api';
  userProfileKey = 'UserProfileKey';


  constructor(private httpClient: HttpClient) {
  }

  updateProfile(profile: ProfileDto): Observable<ProfileDto> {
    return this.httpClient.post<ProfileDto>(`${this.baseUrl}${this.basePath}/api/v1/user`, profile)
      .pipe(
        tap((profile) => console.log("Profile received from service post: ", profile)),
        tap((profile) => localStorage.setItem(this.userProfileKey, JSON.stringify(profile)))
      );
  }

  updateHandle(handle: string, smplWalletAddress: string, firstName: string, lastName: string, myContact: boolean): Observable<ProfileDto> {
    return this.updateProfile({handle, smplWalletAddress, firstName, lastName, myContact})
  }


  getProfile(): Observable<ProfileDto> {

    const getUserProfile = localStorage.getItem(this.userProfileKey)

    return iif(
      () => !!getUserProfile,
      of<ProfileDto>(JSON.parse(getUserProfile as string)),
      this.httpClient.get<ProfileDto>(`${this.baseUrl}${this.basePath}/api/v1/user`)
        .pipe(
          tap((profile) => localStorage.setItem(this.userProfileKey, JSON.stringify(profile)))
        )
    )
  }

  getContactList(contactsRequest: PaginatedContactsRequestDto): Observable<ProfileDto[]> {
    let params = new HttpParams();
    if (contactsRequest.pageNumber) params = params.append('pageNumber', contactsRequest.pageNumber);
    params = params.append('size', contactsRequest.size);
    if (contactsRequest.sortBy) params = params.append('sortBy', contactsRequest.sortBy);
    if (contactsRequest.ascending) params = params.append('ascending', contactsRequest.ascending);
    if (contactsRequest.searchKey) params = params.append('searchKey', contactsRequest.searchKey);
    if (contactsRequest.myContactsOnly) params = params.append('myContactsOnly', contactsRequest.myContactsOnly);
    return this.httpClient.get<PaginatedResponseDto<ProfileDto>>(`${this.baseUrl}${this.basePath}/api/v1/contacts`, {params})
      .pipe(
        map(paginatedResponse => paginatedResponse.content)
      )
  }

  addContact(contact: AddContactRequestDto): Observable<AddContactRequestDto> {
    return this.httpClient.post<AddContactRequestDto>(`${this.baseUrl}${this.basePath}/api/v1/contacts`, contact)
  }

  removeContact(contact: RemoveContactRequestDto) {
    this.httpClient.delete(`${this.baseUrl}${this.basePath}/api/v1/contacts`)
  }

  getHandlesMapFromAddress(smplWalletAddresses: HandlesMapRequestDto) {
    return this.httpClient.post<HandlesMapResponseDto>(`${this.baseUrl}${this.basePath}/api/v1/contacts/handles`, smplWalletAddresses);
  }

  getMyContactLink(): Observable<string> {
    return this.getProfile().pipe(mergeMap(profile => environment.baseWalletUrl + '/add-contact?handle=' + profile.handle))
  }

  clearHandleCache() {
    localStorage.removeItem(this.userProfileKey)
  }
}
