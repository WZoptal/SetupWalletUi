// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {EnvironmentModel} from './environment-model';

export const environment: EnvironmentModel = {
<<<<<<< HEAD
  identityProviderBaseAuthUrl: 'http://localhost:8080',
=======
  baseWalletUrl: 'http://localhost:4200',
  identityProviderBaseAuthUrl: 'http://keycloak:8080',
>>>>>>> 92bd42a5a147c05f9bb71a572001004d76da42dc
  identityProviderClientId: 'SmplWalletUi',
  production: false,
  baseVaultChainWalletServiceUrl: 'http://localhost:8081',
  baseChainApiUrl: 'http://localhost:1318',
  baseAmbassadorProgramServiceUrl: 'http://localhost:8084',
  baseAmbassadorProgramUrl: 'https://staging.ambassador.smplfoundation.org',
  mailChimpUrl: 'https://smplecosystem.us14.list-manage.com/subscribe/post-json',
  contactsManagementServiceUrl: 'http://localhost:8686',

  // baseVaultChainWalletServiceUrl: string,
  // baseChainApiUrl
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
