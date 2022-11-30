import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import {ChangePasswordComponent} from './change-password/change-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {OnboardingComponent} from './onboarding/onboarding.component';
import {TermsAndPrivacyGuardGuard} from './guard/terms-and-privacy-guard.guard';
import {AuthGuard} from './guard/auth.guard';
import {ProfileComponent} from './modules/dashboard/views/profile/profile.component';
import {ShareSmplComponent} from './modules/dashboard/views/share-smpl/share-smpl.component';
import {SlidesComponent} from './slides/slides.component';
import {WalkThroughGuard} from './guard/walk-through.guard';
import { HandleGuard } from './guard/handle.guard';
import { ContactListComponentComponent } from './modules/contacts/views/contact-list.component/contact-list.component.component';
=======
import {LoginComponent} from './modules/auth/views/login/login.component';
import {OnboardingComponent} from './modules/onboarding/views/onboarding/onboarding.component';
import {TermsAndPrivacyGuardGuard} from './modules/onboarding/guards/terms-and-privacy-guard.guard';
import {AuthGuard} from './modules/auth/guards/auth.guard';
import {ProfileComponent} from './modules/contacts/views/profile/profile.component';
import {ShareSmplComponent} from './modules/share/views/share-smpl/share-smpl.component';
import {SlidesComponent} from './modules/onboarding/views/slides/slides.component';
import {WalkThroughGuard} from './modules/onboarding/guards/walk-through.guard';
import { HandleGuard } from './modules/contacts/guards/handle.guard';
>>>>>>> 92bd42a5a147c05f9bb71a572001004d76da42dc

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [AuthGuard, TermsAndPrivacyGuardGuard, WalkThroughGuard, HandleGuard]
    // canActivate: [AuthGuard]
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
  {
    path: 'slides',
    component: SlidesComponent,
    canActivate: [AuthGuard, TermsAndPrivacyGuardGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact-list',
    component: ContactListComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'share-smpl',
    component: ShareSmplComponent,
    canActivate: [AuthGuard]
<<<<<<< HEAD
=======
  },
  {
    path: 'transaction-history',
    loadChildren: () => import('./modules/transaction-history/transaction-history.module').then(m => m.TransactionHistoryModule)
>>>>>>> 92bd42a5a147c05f9bb71a572001004d76da42dc
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
