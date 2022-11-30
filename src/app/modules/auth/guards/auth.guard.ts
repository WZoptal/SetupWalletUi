import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {SmplVaultWalletCredentialsFacade} from '@smplfinance/wallet-core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected readonly keycloak: KeycloakService,
    protected readonly router: Router,
    private readonly smplVaultWalletCredentialsFacade: SmplVaultWalletCredentialsFacade
    ) {
    super(router, keycloak);
  }

  async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (!this.authenticated) {
      console.log('not authed, trying');
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
      console.log('logged in');
    } else {
      console.log('authed');
    }

    this.smplVaultWalletCredentialsFacade.dispatchLoadSmplVaultWalletCredentials();

    // Get the roles required from the route.
    const requiredRoles = route.data.roles;

    console.log('checking roles');
    // Allow the user to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      console.log('no required roles, returning true');
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }

}
