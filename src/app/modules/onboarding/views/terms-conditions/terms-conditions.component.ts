import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  dialogRef: any;

  ngOnInit(): void {
  }

  accept() {
    this.dialog.closeAll()
  }
}
