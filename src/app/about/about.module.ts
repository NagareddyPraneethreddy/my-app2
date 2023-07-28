import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { CeoComponent } from './ceo/ceo.component';



@NgModule({
  declarations: [
    CompanyComponent,
    CeoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeoComponent,
    CompanyComponent,
  ]
})
export class AboutModule { 

}
