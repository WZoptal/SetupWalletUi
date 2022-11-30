<<<<<<< HEAD
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {WalletCoreConfig} from '@smplfinance/wallet-core';
import {environment} from '../environments/environment';
import {InstructionPageComponent} from "./instruction-page/instruction-page.component";
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {OnboardingComponent} from './onboarding/onboarding.component';
import {TermsConditionsComponent} from './onboarding/terms-conditions/terms-conditions.component';
import {PrivacyPolicyComponent} from './onboarding/privacy-policy/privacy-policy.component';
import {IonicModule, Platform} from '@ionic/angular';
import {SlidesComponent} from './slides/slides.component';
import {SwiperModule} from 'swiper/angular';
import {ProfileComponent} from './modules/dashboard/views/profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializeKeycloak} from './keycloak-init';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HandleGuard} from './guard/handle.guard'
import { ContactsModule } from './modules/contacts/contacts.module';
=======
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { WalletCoreConfig } from '@smplfinance/wallet-core';
import { environment } from '../environments/environment';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { IonicModule, Platform } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { MatCardModule } from '@angular/material/card';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './keycloak-init';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AmbassadorModule } from './modules/ambassador/ambassador.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { ShareModule } from './modules/share/share.module';
import { SmplChainModule } from './modules/smpl-chain/smpl-chain.module';
import { TransactionHistoryModule } from './modules/transaction-history/transaction-history.module';
>>>>>>> 92bd42a5a147c05f9bb71a572001004d76da42dc
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    IonicModule.forRoot(),
    HttpClientModule,
    DashboardModule,
    ContactsModule,
    SwiperModule,
    MatCardModule,
    HttpClientJsonpModule,
    KeycloakAngularModule,
    AmbassadorModule,
    AuthModule,
    ContactsModule,
    DashboardModule,
    OnboardingModule,
    ShareModule,
    SmplChainModule,
    TransactionHistoryModule,
  ],
  providers: [
    {
      provide: WalletCoreConfig,
      useFactory: () => {
        const config = new WalletCoreConfig();
        config.baseVaultChainWalletServiceUrl = environment.baseVaultChainWalletServiceUrl ?? config.baseVaultChainWalletServiceUrl;
        config.baseChainApiUrl = environment.baseChainApiUrl ?? config.baseChainApiUrl;
        return config
      }
    },

    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, Platform],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('identity provider', environment.identityProviderBaseAuthUrl)
  }
}
