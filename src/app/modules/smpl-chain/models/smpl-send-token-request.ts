import {SmplChainAmount} from '@smplfinance/wallet-core';

export interface SmplSendTokenRequest {
  senderWalletAddress: string;
  recipientWalletAddress: string;
  amount: SmplChainAmount;
  fee?: SmplChainAmount;
  memo?: string;
}
