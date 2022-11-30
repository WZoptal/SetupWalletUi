import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class WalkThroughGuard implements CanActivate {

    constructor(
        private router: Router,
    ) { }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let walkThroughCompleted = localStorage.getItem('walkThroughCompleted')
        if (walkThroughCompleted === "true") return true;
        else return this.router.navigate(['/slides']);
    }
}