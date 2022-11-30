import {Clipboard} from '@angular/cdk/clipboard';
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {Share, ShareOptions} from '@capacitor/share';
import {AmbassadorDto} from 'src/app/modules/ambassador/models/ambassador.dto';
import {AmbassadorProgramService} from 'src/app/modules/ambassador/services/ambassador-program.service';
import {NavController, Platform} from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-share-smpl',
  templateUrl: './share-smpl.component.html',
  styleUrls: ['./share-smpl.component.scss']
})
export class ShareSmplComponent implements OnInit {

  showAmbassadorReferralLink = false;
  showWalletReferralLink = false;
  showWalletAddress = false;
  ambassadorDetails!: AmbassadorDto;
  isCordova = this.platform.is('cordova');

  constructor(
    private readonly clipboard: Clipboard,
    private snackbar: MatSnackBar,
    private readonly ambassadorProgramService: AmbassadorProgramService,
    private readonly platform: Platform,
    private readonly navController: NavController,
    private socialSharing: SocialSharing,
  ) {
  }

  ngOnInit(): void {
    this.ambassadorProgramService.getAmbassador().subscribe(
      (res: any) => {
        this.ambassadorDetails = res
      }
    )
  }

  copyToClipboard(referralLink: string) {
    if (this.clipboard.copy(`${environment.baseAmbassadorProgramUrl}/${referralLink}?code=${this.ambassadorDetails.referralCode}`)) {
      this.snackbar.open('Copied Referral Link', 'Close', {duration: 1000})
    }
  }

  copyWalletAddress(address: string) {
    if (this.clipboard.copy(address)) {
      this.snackbar.open('Copied Wallet Address', 'Close', {duration: 1000})
    }
  }

  generateQRCodeLink(referralLink: string) {
    const link = encodeURIComponent(`${environment.baseAmbassadorProgramUrl}/${referralLink}?code=${this.ambassadorDetails.referralCode}`);
    return `https://api.qrserver.com/v1/create-qr-code/?data=${link}&size=160x160`;
  }

  async shareReferralLink(title: string, text: string, isUrl = true) {
    const options:any = {
      subject: title,
      message: text
    };
    if (isUrl) {
      options.url = `${environment.baseAmbassadorProgramUrl}/${text}?code=${this.ambassadorDetails.referralCode}`;
    }
    await this.socialSharing.shareWithOptions(options)
  }

  async onBack() {
    await this.navController.back();
  }

}
