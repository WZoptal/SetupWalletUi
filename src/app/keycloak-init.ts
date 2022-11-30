import {Platform} from "@ionic/angular";
import {KeycloakService} from "keycloak-angular";
import {environment} from '../environments/environment';


export function initializeKeycloak(keycloak: KeycloakService, platform: Platform): any {
  try {
    return () => initKeycloak(keycloak, platform);
  } catch (err) {
    console.log("🚀 ~ file: app-init.ts ~ line 33 ~ initializeKeycloak ~ err", err);
  }
}

async function initKeycloak(keycloak: KeycloakService, platform: Platform): Promise<boolean> {
  console.log('origin', window.location.origin)
  try {
    return await keycloak.init({
      config: {
        url: environment.identityProviderBaseAuthUrl + '/auth',
        realm: 'SmplFinance',
        clientId: environment.identityProviderClientId,
      },
      initOptions: {
        adapter: platform.is('cordova') ? 'cordova' : 'default',
        checkLoginIframe: false,
        // onLoad: 'check-sso',
        // silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
        redirectUri: window.location.origin + '/dashboard',
        pkceMethod: 'S256',
      },
      loadUserProfileAtStartUp: true,
      shouldAddToken: () => true,
      shouldUpdateToken: () => true
    });

  } catch (err) {
    console.log("🚀 ~ file: app-init.ts ~ line 81 ~ initKeycloakForWeb ~ err", err);
    return false;
  }
}
