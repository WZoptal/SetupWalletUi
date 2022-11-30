export interface EnvironmentModel {
  production: boolean;
  baseWalletUrl: string;
  baseVaultChainWalletServiceUrl: string;
  baseChainApiUrl: string;
  identityProviderBaseAuthUrl: string;
  identityProviderBaseAuthUrlForLocalDev?: string;
  identityProviderClientId: string;
  baseAmbassadorProgramServiceUrl: string;
  baseAmbassadorProgramUrl: 'https://ambassador.smplfoundation.org' | 'https://staging.ambassador.smplfoundation.org' | 'http://localhost:8084';
  mailChimpUrl: string;
  contactsManagementServiceUrl: string;
}
