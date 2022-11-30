import {Component, OnInit} from '@angular/core';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';
import {map, tap} from 'rxjs';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.scss']
})
export class InstructionPageComponent implements OnInit {

  constructor(
    private smplChainWalletService: SmplChainWalletService,
    private clipboard: Clipboard,
    private readonly snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InstructionPageComponent>
  ) {
  }

  primaryAddress$ = this.smplChainWalletService.getPrimaryAddress();
  personalCode$ = this.smplChainWalletService.getPrimaryAddress()
    .pipe(map(address => address.slice(-6).toUpperCase()));

  ngOnInit(): void {
  }

  copyAddress(address: string): void {
    if (this.clipboard.copy(address)) {
      this.snackBar.open("Address copied", 'Close', {duration: 2000});
    }
  }

  copyCode(code: string): void {
    if (this.clipboard.copy(code)) {
      this.snackBar.open("Personal code copied", 'Close', {duration: 2000});
    }
  }

}
