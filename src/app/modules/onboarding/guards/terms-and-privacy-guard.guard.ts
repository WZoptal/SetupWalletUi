import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TermsAndPrivacyGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const onboadingAccepted = localStorage.getItem("onboardingAccepted")
    if(onboadingAccepted === "True"){
      return true;
    }
    else {
      return this.router.navigate(['/onboarding'])
    }
  }
  constructor(private router: Router) {
  }
}
