import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [MainComponent, PasswordComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
