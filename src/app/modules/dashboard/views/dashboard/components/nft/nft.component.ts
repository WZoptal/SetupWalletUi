import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstructionPageComponent } from 'src/app/modules/dashboard/views/instruction-page/instruction-page.component';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {

  columns: any = [
    {
      id: 'asset',
      label: 'Asset'
    },
    {
      id: 'mint',
      label: 'Mint #'
    },
    {
      id: 'abilities',
      label: 'Abilities'
    },
    {
      id: 'value',
      label: 'Value'
    }
  ];

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }



}
