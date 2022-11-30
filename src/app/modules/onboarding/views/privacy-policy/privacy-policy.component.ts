import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }
  back(){
    localStorage.removeItem("onboardingAccepted")
    this.dialog.closeAll();
  }
  accept(){
    localStorage.setItem("onboardingAccepted", "True")
    this.dialog.closeAll()
    return this.router.navigate(["/dashboard/token"]);
  }
}
