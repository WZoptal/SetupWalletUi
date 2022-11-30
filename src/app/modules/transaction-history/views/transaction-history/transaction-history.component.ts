import { Component, Injectable, OnInit } from '@angular/core';
import { SmplChainService } from 'src/app/modules/smpl-chain/services/smpl-chain.service';
import { Router } from '@angular/router';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {map, mergeMap, tap} from 'rxjs';
import { ContactsService } from 'src/app/modules/contacts/services/contacts.service';
import { HandlesMapRequestDto } from 'src/app/modules/contacts/models/handles-map-request.dto';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  Sent: string = 'sent';
  transactionDetails: any;
  isShowHistory: boolean = true;
  addressArray: HandlesMapRequestDto;

  transactions$ = this.smplChainWalletService.getPrimaryAddress()
    .pipe(
      mergeMap(address => this.smplChainService.getTransactionHistory(address)),
    );

  constructor(
    public smplChainService: SmplChainService,
    public smplChainWalletService: SmplChainWalletService,
    public contactsService: ContactsService,
    private router: Router,
  ) {
    this.addressArray = {
      smplWalletAddresses: []
    };
  }

  ngOnInit(): void {
  }

  navigateBack(): void {
    console.log('Called NavBack');
    this.router.navigateByUrl('/dashboard/token');
  }


  details(data: any) {
    this.isShowHistory = false;
    this.transactionDetails = data;
  }

  // backButton() {
  //  if(this.isShowHistory){
  //   this.router.navigate(['/']);
  //  }else{
  //   this.isShowHistory = true;
  //  }
  // }

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

  getDateFromTimeStamp(timestamp: number) {
    var gmt = (new Date(timestamp * 1000));

    var date = (gmt.getDate()).toString();
    var month = (gmt.getMonth() + 1).toString();
    var year = gmt.getFullYear();
    if (parseInt(date) < 10) date = ('0' + date);
    if (parseInt(month) < 10) month = '0' + month;
    var formatedDate = date + '.' + month + '.' + year;
    return formatedDate;
  }

  getTimeFromTimeStamp(timestamp: number) {
    var gmt = new Date(timestamp);
    var time = gmt.getHours() + ':' + gmt.getMinutes();

    return time;
  }

}
