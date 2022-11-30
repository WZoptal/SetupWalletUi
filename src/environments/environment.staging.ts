import {EnvironmentModel} from './environment-model';

export const environment: EnvironmentModel = {
  production: true,
  baseWalletUrl: 'https://staging.wallet.smplfoundation.org',
  mailChimpUrl: 'https://smplecosystem.us14.list-manage.com/subscribe/post-json',
  baseVaultChainWalletServiceUrl: 'https://staging.api.vault-chain-wallets.smplfinance.com',
  baseChainApiUrl: 'https://testnet-validator1.smplfinance.com:1318',
  identityProviderBaseAuthUrl: 'https://staging.id.smplfinance.com',
  identityProviderClientId: 'SmplWalletUi',
  baseAmbassadorProgramServiceUrl: 'https://staging.api.ambassador.smplfoundation.org',
  baseAmbassadorProgramUrl: 'https://staging.ambassador.smplfoundation.org',
  contactsManagementServiceUrl: 'https://staging.contact-management.smplecosystem.org'
};
