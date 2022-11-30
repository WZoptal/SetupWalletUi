import { Component, Injectable, OnInit } from '@angular/core';
import { SmplChainService } from 'src/app/services/smpl-chain/smpl-chain.service';
import { Router } from '@angular/router';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {map, mergeMap, tap} from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';
import { SmplWalletAddressesDto } from 'src/app/dtos/smpl-wallet-address.dto';

@Component({
  selector: 'app-contact-list.component',
  templateUrl: './contact-list.component.component.html',
  styleUrls: ['./contact-list.component.component.scss']
})
export class ContactListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
