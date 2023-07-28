import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindHrComponent } from './find-hr/find-hr.component';
import { FindSupportComponent } from './find-support/find-support.component';

const routes: Routes = [
  {path:'find-hr',component:FindHrComponent},
  {path:'find-support',component:FindSupportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }
