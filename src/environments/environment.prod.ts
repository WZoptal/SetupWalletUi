import {EnvironmentModel} from './environment-model';

export const environment:EnvironmentModel = {
  baseWalletUrl: 'https://wallet.smplfoundation.org',
  mailChimpUrl: 'https://smplecosystem.us14.list-manage.com/subscribe/post-json',
  production: true,
  baseVaultChainWalletServiceUrl: 'https://api.vault-chain-wallets.smplfinance.com',
  baseChainApiUrl: 'https://mainnet-node1.smplfinance.com:1318',
  identityProviderBaseAuthUrl: 'https://id.smplfinance.com',
  identityProviderClientId: 'SmplWalletUi',
  baseAmbassadorProgramServiceUrl: 'https://api.ambassador.smplfoundation.org',
  baseAmbassadorProgramUrl: 'https://ambassador.smplfoundation.org',
  contactsManagementServiceUrl: 'https://contact-management.smplecosystem.org'
};
