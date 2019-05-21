import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { AuthorityComponent } from './authority/authority.component';

const routes: Routes = [
  {path:'',component:AdminComponent},
  {path:'',component:AdminComponent,
      children:[
        {path:'user',component:UserComponent},
        {path:'auth',component:AuthorityComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
