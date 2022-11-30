import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TransactionHistoryComponent} from './views/transaction-history/transaction-history.component';
import {
  TransactionDetailsComponent
} from './views/transaction-history/components/transaction-details/transaction-details.component';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {WalletCoreModule} from '@smplfinance/wallet-core';
import { IonicModule } from '@ionic/angular';

const routes: Route[] = [
  {path: '', component: TransactionHistoryComponent},
  {path: 'detail', component: TransactionDetailsComponent}
];

@NgModule({
  declarations: [
    TransactionHistoryComponent,
    TransactionDetailsComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transactionHistory', {}),
    WalletCoreModule,
    RouterModule.forChild(routes),
    IonicModule
  ],
  exports: [RouterModule]
})

export class TransactionHistoryModule {
}
