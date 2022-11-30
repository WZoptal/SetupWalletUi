import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HttpParams} from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailchimpService {

  mailchimpURL = environment.mailChimpUrl;

  constructor(private httpClient: HttpClient) { }

  addUserToList(email: string, tags: number[]){
    const params = new HttpParams()
      .set('EMAIL', email)
      .set('tags', tags.join(','))
      .set('b_5830e8e1f7ece32ed585ac3f5_f1c86aae6d', '')
      .set('u', '5830e8e1f7ece32ed585ac3f5')
      .set('id', 'f1c86aae6d');
    const url = this.mailchimpURL + '?' + params.toString();
    return this.httpClient.jsonp<MailChimpResponse>(url, 'c')
  }

}
