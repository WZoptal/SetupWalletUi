import {Component, OnDestroy, OnInit} from '@angular/core';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {SmplChainService} from 'src/app/modules/smpl-chain/services/smpl-chain.service';
import {mergeMap, Subscription, tap} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {InstructionPageComponent} from 'src/app/modules/dashboard/views/instruction-page/instruction-page.component';
import {Coin} from "@cosmjs/stargate";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit, OnDestroy {
  constructor(
    private smplChainWalletService: SmplChainWalletService,
    private smplChainService: SmplChainService,
    private dialog: MatDialog,
  ) {
  }

  private subscriptions = new Subscription()

  smplBalance$ = this.smplChainWalletService.getBalance().pipe(tap(balance => console.log('in token c, balance', balance)));
  smplBalances$ = this.smplChainWalletService.getPrimaryAddress()
    .pipe(
      mergeMap(address => this.smplChainService.getBalances(address)),
      tap(balances => console.log('balances', balances))
    );
  smplBalance: number = 0;


  columns: any = [
    {
      id: 'asset',
      label: 'Asset'
    },
    {
      id: 'available',
      label: 'Available'
    },
    {
      id: 'vesting',
      label: 'Vesting'
    },
    {
      id: 'total',
      label: 'Total'
    }
  ];

  ngOnInit(): void {
    this.subscriptions.add(this.smplBalance$.subscribe(balance => this.smplBalance = balance));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openInstructionPage() {
    this.dialog.open(InstructionPageComponent, {
      width: '85%',
      height: '75.1%',
      hasBackdrop: true
    });
  }



}
