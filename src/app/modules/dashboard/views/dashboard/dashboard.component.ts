import {Component, OnDestroy, OnInit} from '@angular/core';
import {SmplChainWalletService, SmplVaultWalletCredentialsFacade} from '@smplfinance/wallet-core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from '@angular/cdk/overlay';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {AmbassadorProgramService} from 'src/app/modules/ambassador/services/ambassador-program.service';
import {Subscription} from 'rxjs';
import {environment} from 'src/environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MailchimpService} from 'src/app/services/mailchimp.service';
import {KeycloakService} from 'keycloak-angular';
import { ContactsService } from 'src/app/modules/contacts/services/contacts.service';

const env = environment;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('pillSlider', [
      state('token', style({
        left: '4px',
        right: '105px'
      })),
      state('nft', style({
        left: '105px',
        right: '4px'
      })),
      transition('token <=> nft', [
        animate('200ms ease-out')
      ]),
    ])
  ]
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private smplVaultWalletCredentialsFacade: SmplVaultWalletCredentialsFacade,
    private smplChainWalletService: SmplChainWalletService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    public breakpointObserver: BreakpointObserver,
    private ambassadorProgramService: AmbassadorProgramService,
    private router: Router,
    private readonly keycloakService: KeycloakService,
    private route: ActivatedRoute,
    private mailChimpService: MailchimpService,
    private contactsService: ContactsService,
  ) {
  }

  passwordChangeUrl = environment.identityProviderBaseAuthUrl + '/auth/realms/SmplFinance/account/password';
  updateProfileUrl = environment.identityProviderBaseAuthUrl + '/auth/realms/SmplFinance/account';
  ambassador$ = this.ambassadorProgramService.getAmbassador();
  usdseBalance$ = this.smplChainWalletService.getBalance('usdse');
  profile$ = this.contactsService.getProfile();
  showContainer = false;
  ambassadorUrl = env.baseAmbassadorProgramUrl;
  activePill = 'token';

  private _subscriptions: Subscription[] = [];

  private set subscriptionList(sub: Subscription) {
    this._subscriptions.push(sub);
  }

  async uploadEmail(): Promise<void> {
    let profile = await this.keycloakService.loadUserProfile();
    console.log("profile", profile)
    if (profile?.email) {
      this.mailChimpService.addUserToList(profile.email, [7331726])
        .subscribe(response => {
          if (response.result && response.result !== 'error') {
            console.log('email added',)
          } else {
            console.log('email add failed', response.msg)
          }
        })
    }
  }

  ngOnInit(): void {
    this.smplChainWalletService.getPrimaryAddress().subscribe(address => console.log('in dashboard, address', address));
    this.subscriptionList = this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.showContainer = !state.matches;
      });
    if (this.router.url.substring(0, 16) != '/dashboard/token') {
      this.activePill = 'nft';
    }
    this.uploadEmail().then();
  }

  setPillState(state: string): void {
    this.activePill = state;
  }

  copied(): void {
    this.snackBar.open('Address copied to clipboard!', 'Close', {duration: 2000})
  }

  logout(): void {
    this.keycloakService.logout(window.location.origin).then(() => this.router.navigate(['/login']));
    this.contactsService.clearHandleCache()
  }

  openDialog(modal: ComponentType<any>) {
    this.dialog.open(
      modal,
      {hasBackdrop: true}
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

}
