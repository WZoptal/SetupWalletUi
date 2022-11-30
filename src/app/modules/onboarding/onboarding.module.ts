import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { PrivacyPolicyComponent } from './views/privacy-policy/privacy-policy.component';
import { SlidesComponent } from './views/slides/slides.component';
import { TermsConditionsComponent } from './views/terms-conditions/terms-conditions.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SwiperModule } from 'swiper/angular';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    OnboardingComponent,
    PrivacyPolicyComponent,
    SlidesComponent,
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SwiperModule,
    IonicModule
  ]
})
export class OnboardingModule { }
