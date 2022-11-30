import {AfterViewInit, Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {

  form: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private fb: UntypedFormBuilder,
    private keycloakService: KeycloakService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngAfterViewInit(): void {
    // this.smplAuthenticationService.login(this.smplAuthOptions.redirectUri);
  }

  async login(): Promise<void> {
    setTimeout(() => {
      this.keycloakService.login().then(() => {
        this.router.navigate(['/dashboard']);
      }).catch((error: any) => console.log('error', error));
    }, 500)
  }

}
