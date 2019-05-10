import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './portal/start/login/login.component';
import { ForgetComponent } from './portal/start/forget/forget.component';
import { RegistComponent } from './portal/start/regist/regist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    RegistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
