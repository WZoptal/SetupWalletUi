import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {catchError, mergeMap, Observable, of, tap} from 'rxjs';
import {ContactsService} from 'src/app/modules/contacts/services/contacts.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HandleGuard implements CanActivate {
  constructor(
    private contactsService: ContactsService, private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.contactsService.getProfile().pipe(
      mergeMap(profile => !!profile.handle && !!profile.smplWalletAddress ? of(true) : of(this.router.parseUrl('/profile'))),
      catchError(err => of(this.router.parseUrl('/profile')))
    );
  }

}


