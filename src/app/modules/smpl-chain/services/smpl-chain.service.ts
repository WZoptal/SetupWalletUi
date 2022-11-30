import {Injectable} from '@angular/core';
import {SmplChainBankTransactionResponse, SmplChainClientService} from '@smplfinance/wallet-core';
import {forkJoin, map, merge, mergeMap, Observable, from, of, onErrorResumeNext, switchMap, tap, zip} from 'rxjs';
import {SmplTransactionDto} from 'src/app/modules/smpl-chain/models/smpl-transaction.dto';
import {Coin, DeliverTxResponse, StdFee} from '@cosmjs/stargate';
import {SmplSendTokenRequest} from 'src/app/modules/smpl-chain/models/smpl-send-token-request';
import { ContactsService } from 'src/app/modules/contacts/services/contacts.service';

@Injectable({
  providedIn: 'root'
})
export class SmplChainService {

  constructor(private smplChainClientService: SmplChainClientService, private contactsService: ContactsService) {
  }

  private static smplTransactionMapper = (transaction: SmplChainBankTransactionResponse, userWalletAddress: string): SmplTransactionDto => {
    let walletAddress = transaction.tx.body.messages[0].from_address;
    let status: 'sent' | 'received' = 'received';
    if (walletAddress === userWalletAddress) {
      status = 'sent';
      walletAddress = transaction.tx.body.messages[0].to_address;
    }
    return {
      amount: transaction.tx.body.messages[0].amount[0].amount,
      denom: transaction.tx.body.messages[0].amount[0].denom,
      memo: transaction.tx.body.memo,
      status,
      timestamp: transaction.timestamp,
      transactionFee: {amount: "2", denom: "smpl"},
      walletAddress,
      handle: '',
    }
  }

  private static smplTransactionSortFunction = (a: SmplTransactionDto, b: SmplTransactionDto): number => {
    if (a.timestamp === b.timestamp) return 0;
    return (a.timestamp > b.timestamp) ? -1 : 1;
  }

  getTransactionHistory(walletAddress: string): Observable<SmplTransactionDto[]> {
    return forkJoin([
        this.smplChainClientService.getTransitionHistory(walletAddress, 'sender'),
        this.smplChainClientService.getTransitionHistory(walletAddress, 'recipient')
      ]
    ).pipe(
      map(([senderHistory, recipientHistory]) => [...senderHistory.tx_responses, ...recipientHistory.tx_responses]),
      map(
        combinedTransactions => combinedTransactions.map(
          e => SmplChainService.smplTransactionMapper(e, walletAddress)
        )
      ),
      map(unsortedSmplTransactions => unsortedSmplTransactions.sort(SmplChainService.smplTransactionSortFunction)),
      mergeMap(transactionHistory => this.contactsService.getHandlesMapFromAddress({
        smplWalletAddresses: transactionHistory.map(smplTransaction => smplTransaction.walletAddress),
      }).pipe(
          map(handlesMap => transactionHistory.map(smplTransaction => {
            smplTransaction.handle = handlesMap.handleMap[smplTransaction.walletAddress];
            return smplTransaction;
          })),
        ),
      ),
    );
  }

  sendToken(sendTokenRequest: SmplSendTokenRequest): Observable<DeliverTxResponse> {
    let fee: StdFee;
    if (sendTokenRequest.fee) {
      fee = {
        amount: [{
          amount: sendTokenRequest.fee.amount,
          denom: sendTokenRequest.fee.denom
        }],
        gas: '0'
      };
    }
    return this.smplChainClientService.getClient().pipe(
      switchMap(client => client.sendTokens(
          sendTokenRequest.senderWalletAddress,
          sendTokenRequest.recipientWalletAddress,
          [{amount: sendTokenRequest.amount.amount, denom: sendTokenRequest.amount.denom}],
          fee ?? 'auto',
          sendTokenRequest.memo
        )
      )
    );
  }

  getBalances(address: string): Observable<readonly Coin[]> {
    return this.smplChainClientService.getClient()
      .pipe(
        mergeMap(client => from(client.getAllBalances(address)))
      )
  }
}
