import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindHrComponent } from './find-hr/find-hr.component';
import { FindSupportComponent } from './find-support/find-support.component';


@NgModule({
  declarations: [
    FindHrComponent,
    FindSupportComponent
  ],
  imports: [
    CommonModule,
    FindRoutingModule
  ]
})
export class FindModule { }
