import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//import { LoginComponent } from './login/login.component';
//import { RegistComponent } from './start/regist/regist.component';
import { ForgetComponent } from './start/forget/forget.component';
import { LoginComponent } from './start/login/login.component';
import { StartComponent } from './start/start.component';
import { RegistComponent } from './start/regist/regist.component';

@NgModule({
  declarations: [PortalComponent, ForgetComponent, LoginComponent, StartComponent, RegistComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class PortalModule { }
