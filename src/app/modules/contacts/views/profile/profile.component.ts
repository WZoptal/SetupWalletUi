import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SmplChainWalletService } from '@smplfinance/wallet-core';
import { catchError, tap } from 'rxjs';
import { ProfileDto } from 'src/app/modules/contacts/models/profile.dto';
import { ContactsService } from 'src/app/modules/contacts/services/contacts.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  validationErrorMessage: string = 'Loading';

  constructor(
    private smplChainWalletService: SmplChainWalletService,
    private contactsService: ContactsService,
    readonly formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      handle: '',
      smplWalletAddress: '',
    });
  }

  ngOnInit(): void {
    this.smplChainWalletService.getPrimaryAddress().subscribe(address => {
      console.log(address," this is coming value")
      this.form.controls.smplWalletAddress.setValue(address);
      this.validationErrorMessage = '';
    })
  }

  validateForm(): boolean {
    if(this.form.controls.handle.value.length < 4) {
      this.validationErrorMessage = 'Must be at least 4 characters long';
      return false;
    } else if(this.form.controls.handle.value.length > 15) {
      this.validationErrorMessage = 'Must be at most 15 characters long';
      return false;
    } else if(this.form.controls.handle.value.search(/\s/gi) != -1) {
      this.validationErrorMessage = 'Cannot contain whitespace characters';
      return false;
    } else if(this.form.controls.handle.value.search(/@/gi) != -1) {
      this.validationErrorMessage = 'Cannot contain "@"';
      return false;
    } else if(this.form.controls.smplWalletAddress.value == '') {
      this.validationErrorMessage = 'Check your network connection and try again.';
      return false;
    }
    this.validationErrorMessage = '';
    return true;
  }

  updateProfile() {
    console.log('updateProfile called. form.dirty: ', this.form.dirty, ', form.touched: ', this.form.touched);
    console.log('form.value: ', this.form.value);
    if ((this.form.dirty || this.form.touched) && this.validateForm()) {
      let profile: ProfileDto = this.form.value;
      console.log('Form passed validation');
      this.contactsService.updateProfile(profile).subscribe({
        next: (profile) => this.router.navigateByUrl('/dashboard'),
        error: (err) => {
          console.log("err: ", err);
          if(err.status == 409) {
            this.validationErrorMessage = 'This handle is already taken';
          }
        }
      });
    }
  }

}
