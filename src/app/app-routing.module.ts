import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolDashbordComponent } from './components/school/school-dashbord/school-dashbord.component';

const routes: Routes = [
  {path:"dashbord",component:SchoolDashbordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
