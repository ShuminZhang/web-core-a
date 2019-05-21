import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'},
  {path:'edit',loadChildren:'./edit/edit.module#EditModule'},
  {path:'main',loadChildren:'./main/main.module#MainModule'},
  {path:'portal',loadChildren:'./portal/portal.module#PortalModule'},
  {path:'publish',loadChildren:'./publish/publish.module#PublishModule'},
  {path:'review',loadChildren:'./review/review.module#ReviewModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
