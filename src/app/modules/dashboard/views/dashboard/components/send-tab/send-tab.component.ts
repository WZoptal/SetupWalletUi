import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {SmplChainWalletService} from '@smplfinance/wallet-core';
import {debounceTime, firstValueFrom, mergeMap, Observable, of, tap} from 'rxjs';
import {SmplChainService} from 'src/app/modules/smpl-chain/services/smpl-chain.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ContactsService} from 'src/app/modules/contacts/services/contacts.service';
import {ProfileDto} from 'src/app/modules/contacts/models/profile.dto';

interface SendForm {
  searchHandle: FormControl<string>;
  amount: FormGroup<{ amount: FormControl<number | null>, denom: FormControl<string> }>,
  memo: FormControl<string | null>,
  fee?: any
}

@Component({
  selector: 'app-send-tab',
  templateUrl: './send-tab.component.html',
  styleUrls: ['./send-tab.component.scss']
})
export class SendTabComponent implements OnInit {
  sendForm: FormGroup<SendForm>;

  sendingSpinner: boolean = false;

  greyButtonClass = 'grey-button'

  inFocus = false;

  userSearchResultList: ProfileDto[] = [];

  selectedUser: any;

  constructor(
    private smplChainWalletService: SmplChainWalletService,
    private smplChainService: SmplChainService,
    private matSnackBar: MatSnackBar,
    private contactsService: ContactsService
  ) {
    this.sendForm = this.buildForm();
  }

  get recipientWalletAddress() {
    return this.selectedUser?.smplWalletAddress;
  }

  get amount() {
    return this.sendForm.get('amount');
  }

  get searchHandle() {
    return this.sendForm.get('searchHandle')
  }

  private buildForm(): FormGroup<SendForm> {
    return new FormGroup<SendForm>({
      searchHandle: new FormControl<string>('', {validators: [Validators.required, Validators.pattern(/^(?:(?!\@).)*$/)], nonNullable: true}),
      amount: new FormGroup({
        amount: new FormControl<number | null>(null, {validators: [Validators.required]}),
        denom: new FormControl<string>('usdse', {nonNullable: true})
      }),
      memo: new FormControl()
    });
  }

  ngOnInit() {
    this.sendForm.get('searchHandle')?.valueChanges
      .pipe(
        debounceTime(500),
        mergeMap(newValue => this.contactsService.getContactList(
          {size: 1000000, searchKey: newValue, pageNumber: 0, sortBy: undefined, ascending: undefined, myContactsOnly: false})
        ),
        tap(data => console.log('server response', data)),
      )
      .subscribe(
        searchResults => {
          this.userSearchResultList = searchResults
        }
      );
  }

  selectUser(user: any) {
    console.log('Selected User: ', user);
    this.inFocus = false;
    this.selectedUser = user;
    this.sendForm.controls.searchHandle.setValue(user.handle);
  }

  async submitForm() {
    console.log('form', this.sendForm);
    if (this.sendForm.invalid || !this.selectUser) return;
    const formValue = this.sendForm.value;
    if (!formValue.amount?.amount) {
      return
    }
    const senderWalletAddress: string = await firstValueFrom(this.smplChainWalletService.getPrimaryAddress());
    const recipientWalletAddress: string = this.recipientWalletAddress!;
    this.sendingSpinner = true;
    this.smplChainService.sendToken({
      recipientWalletAddress,
      senderWalletAddress,
      amount: {
        amount: formValue.amount.amount.toString(),
        denom: formValue.amount.denom as string
      },
      memo: formValue.memo as string | undefined
    }).subscribe({
        next: res => {
          console.log('res', res);
          this.sendingSpinner = false;
          if (res.code === 0) {
            this.matSnackBar.open('Sent!');
          } else {
            this.matSnackBar.open('There was an error sending');
          }

          this.sendForm.reset()
        },
        error: err => {
          if (/insufficient/i.test(err)) {
            this.matSnackBar.open('Insufficient funds');
          } else {
            this.matSnackBar.open('There was an error sending' + err);
          }
          this.sendingSpinner = false;
        }
      }
    );

  }
}
