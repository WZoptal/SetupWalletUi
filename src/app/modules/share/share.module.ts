import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareSmplComponent } from './views/share-smpl/share-smpl.component';
import { IonicModule } from '@ionic/angular';
import { ClipboardModule } from '@angular/cdk/clipboard';



@NgModule({
  declarations: [
    ShareSmplComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ClipboardModule
  ]
})
export class ShareModule { }
