import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { Route, RouterModule } from '@angular/router';
import { ContactListComponentComponent } from './views/contact-list.component/contact-list.component.component';

// const routes: Route[] = [
//   {
//     path: 'contact-list',
//     component: ContactListComponentComponent
//   }
// ];

@NgModule({
  declarations: [
    ContactListComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule {
  constructor() {
  }
}
=======
import { ProfileComponent } from './views/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class ContactsModule { }
>>>>>>> 92bd42a5a147c05f9bb71a572001004d76da42dc
