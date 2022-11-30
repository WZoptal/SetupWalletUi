import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { SmplChainWalletService } from '@smplfinance/wallet-core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {map, tap} from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-wallet-address',
  templateUrl: './wallet-address.component.html',
  styleUrls: ['./wallet-address.component.scss'],
  animations: [
    trigger('showWalletAddress', [
      state('hide', style({
        width: '0px'
      })),
      state('show', style({
        width: '115px'
      })),
      transition('hide <=> show', [
        animate('300ms ease-out')
      ]),
    ]),
    trigger('rotateArrow', [
      state('right', style({
        transform: 'rotate(0)'
      })),
      state('left', style({
        transform: 'rotate(-180deg)'
      })),
      transition('right <=> left', [
        animate('300ms')
      ]),
    ])
  ]
})
export class WalletAddressComponent implements OnInit {

  constructor(
    private smplChainWalletService: SmplChainWalletService,
    private clipboard: Clipboard,
    private readonly snackBar: MatSnackBar,
  ) { }

  showAddress: boolean = false;

  primaryAddress$ = this.smplChainWalletService.getPrimaryAddress().pipe(tap(address => console.log('in wallet-address, address', address)));

  ngOnInit(): void {
  }

  copyAddress(address: string): void {
    if (this.clipboard.copy(address)) {
      this.snackBar.open("Address copied", 'Close', {duration: 2000});
    }
  }

}
