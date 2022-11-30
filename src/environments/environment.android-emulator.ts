// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {EnvironmentModel} from './environment-model';

export const environment: EnvironmentModel = {
  baseWalletUrl: 'http://192.168.1.107:4200',
  identityProviderBaseAuthUrl: 'http://192.168.1.107:8080',
  identityProviderClientId: 'SmplWalletUi',
  production: false,
  baseVaultChainWalletServiceUrl: 'http://192.168.1.107:8081',
  baseChainApiUrl: 'http://192.168.1.107:1318',
  baseAmbassadorProgramServiceUrl: 'http://192.168.1.107:8084',
  baseAmbassadorProgramUrl: 'https://staging.ambassador.smplfoundation.org',
  mailChimpUrl: 'https://smplecosystem.us14.list-manage.com/subscribe/post-json',
  contactsManagementServiceUrl: 'https://192.168.1.197:8686',
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
