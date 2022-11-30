import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SmplChainService} from 'src/app/modules/smpl-chain/services/smpl-chain.service';
import {SmplTransactionDto} from 'src/app/modules/smpl-chain/models/smpl-transaction.dto';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  @Input('item') details!: SmplTransactionDto;
  @Input('isShowHistory') isShowHistory: boolean = false;
  transactionDetails: any;

  constructor(private router: Router, private smplChainService: SmplChainService, private route: ActivatedRoute) {
  }

  ngOnChanges() {
    if (this.details) {
      this.transactionDetails = this.details
    }
  }

  ngOnInit(): void {

  }

  backButton() {
    this.isShowHistory = true;
  }

  formatAmount(amount: string) {
    if(parseFloat(amount) % 1 == 0){
      return amount+'.00';
    }
    return amount.toString();
  }

  formatDenom(denom: string): string[] {
    switch(denom) {
      case 'usdse':
        return ['USD', 'SE'];
      default:
        return [denom.toUpperCase()];
    }
  }

  formatAddress(address: string) {
    return address.substring(0,7) + "..." + address.substring(address.length - 4);
  }
}
