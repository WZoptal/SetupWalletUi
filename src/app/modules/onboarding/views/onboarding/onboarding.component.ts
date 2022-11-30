import {Component, HostListener, OnInit} from '@angular/core';
import {ComponentType} from '@angular/cdk/overlay';
import {MatDialog} from '@angular/material/dialog';
import {TermsConditionsComponent} from 'src/app/modules/onboarding/views/terms-conditions/terms-conditions.component';
import {PrivacyPolicyComponent} from 'src/app/modules/onboarding/views/privacy-policy/privacy-policy.component';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor(private dialog: MatDialog) {

  }

  @HostListener('window:resize')
  onResize() {
    if (screen.width < 880) {
      this.dialogRef.updateSize("99%", "80%")
    } else {
      this.dialogRef.updateSize("50%", "80%")
    }
  }

  dialogRef: any;

  ngOnInit(): void {
    this.openDialog(TermsConditionsComponent)
    if (screen.width < 880) {
      this.dialogRef.updateSize("95%", "80%")
    }
  }

  openDialog(modal: ComponentType<any>) {
    this.dialogRef = this.dialog.open(
      modal,
      {width: "50%", height: '80%', hasBackdrop: false, autoFocus: false}
    );
    if (screen.width < 880) {
      this.dialogRef.updateSize("99%", "80%")
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.dialogRef = this.dialog.open(PrivacyPolicyComponent,
        {width: '50%', height: '80%', hasBackdrop: false, autoFocus: false}
      )
      if (screen.width < 880) {
        this.dialogRef.updateSize("99%", "80%")
      }
      this.dialogRef.afterClosed().subscribe(() => {
        const onboardingAccepted = localStorage.getItem("onboardingAccepted")
        if (onboardingAccepted === "True") {
        } else {
          this.openDialog(TermsConditionsComponent)
        }
      })
    })

  }
}
