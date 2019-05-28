import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { UserRoleListComponent } from './user/user-role-list/user-role-list.component';
import { UserRoleEditComponent } from './user/user-role-edit/user-role-edit.component';
import { AuthorityComponent } from './authority/authority.component';
import { RoleListComponent } from './authority/role-list/role-list.component';
import { RoleEditComponent } from './authority/role-edit/role-edit.component';
import { MenuTreeComponent } from './authority/menu-tree/menu-tree.component';
import { MenuEditComponent } from './authority/menu-edit/menu-edit.component';
import { PermissionComponent } from './authority/permission/permission.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent, 
    UserComponent, 
    UserListComponent, 
    UserEditComponent, 
    UserProfileComponent, 
    UserPasswordComponent, 
    UserRoleListComponent, 
    UserRoleEditComponent, 
    AuthorityComponent, 
    RoleListComponent, 
    RoleEditComponent, 
    MenuTreeComponent, 
    MenuEditComponent, 
    PermissionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AdminModule { }
