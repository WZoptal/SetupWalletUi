import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {DashboardComponent} from 'src/app/modules/dashboard/views/dashboard/dashboard.component';
import {NftComponent} from './views/dashboard/components/nft/nft.component';
import {TokenComponent} from './views/dashboard/components/token/token.component';
import {SmplVaultWalletCredentialsFacade, WalletCoreModule} from '@smplfinance/wallet-core';
import {ShortAddressPipe} from '../../pipes/short-address.pipe';
import {SmplToUsdPipe} from '../../pipes/smpl-to-usd.pipe';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {LayoutModule} from '@angular/cdk/layout';
import {IonicModule} from '@ionic/angular';
import {WalletAddressComponent} from './views/dashboard/components/wallet-address/wallet-address.component';
import {SendTabComponent} from './views/dashboard/components/send-tab/send-tab.component';
import {SearchUserFieldComponent} from './views/dashboard/components/search-user-field/search-user-field.component';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {SocialSharing} from '@awesome-cordova-plugins/social-sharing/ngx';
import { InstructionPageComponent } from './views/instruction-page/instruction-page.component';

const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'token', pathMatch: 'full'},
      {path: 'token', component: TokenComponent},
      {path: 'nft', component: NftComponent},
    ],
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    InstructionPageComponent,
    NftComponent,
    SearchUserFieldComponent,
    SendTabComponent,
    TokenComponent,
    WalletAddressComponent,
    ShortAddressPipe,
    SmplToUsdPipe,
  ],
  providers: [SocialSharing],
  exports: [
    ShortAddressPipe
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    WalletCoreModule,
    ClipboardModule,
    MatSnackBarModule,
    LayoutModule,
    IonicModule,
    MatProgressSpinnerModule,
  ]
})
export class DashboardModule {
  constructor() {
  }
}
