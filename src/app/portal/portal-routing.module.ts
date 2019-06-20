import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { LoginComponent } from './start/login/login.component';
import { RegistComponent } from './start/regist/regist.component';
import { ForgetComponent } from './start/forget/forget.component';

const routes: Routes = [
  {path:'',component:PortalComponent,
     children:[
      {path:'login',component:LoginComponent},
      {path:'regist',component:RegistComponent},
      {path:'forget',component:ForgetComponent},
     ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
