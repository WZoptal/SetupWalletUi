import {Coin} from '@cosmjs/stargate';

export interface SmplTransactionDto {
  walletAddress: string;
  amount: string;
  denom: string;
  status: 'sent' | 'received';
  timestamp: Date;
  transactionFee: Coin;
  memo: string;
  handle: string;
}
