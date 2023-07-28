import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';
import { VariableComponent } from './variable/variable.component';
import { Interpolation } from '@angular/compiler';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowayprimesComponent } from './twowayprimes/twowayprimes.component';
import { CaluculatorComponent } from './caluculator/caluculator.component';
import { Calaculator2Component } from './calaculator2/calaculator2.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StrucutralDirectivesComponent } from './strucutral-directives/strucutral-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { SchoolComponent } from './school/school.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { ImageComponent } from './image/image.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { PracticeComponent } from './practice/practice.component';
import { CreateComponent } from './create/create.component';
import { BankAdminComponent } from './bank-admin/bank-admin.component';
import { authentiactionGuard } from './authentiaction.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductformComponent } from './productform/productform.component';
import { notifyGuard } from './notify.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { IteamComponent } from './iteam/iteam.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { TopComponent } from './top/top.component';
import { CeoComponent } from './about/ceo/ceo.component';
import { CompanyComponent } from './about/company/company.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authentiactionGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'variable',component:VariableComponent},
    {path:'interpolation',component:InterpolationComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'twowayprimes',component:TwowayprimesComponent},
    {path:'caluculator',component:CaluculatorComponent},
    {path:'calaculator2',component:Calaculator2Component},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'strucutral-directives',component:StrucutralDirectivesComponent},
    {path:'atrribute-directives',component:AttributeDirectivesComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'marksheet',component:MarksheetComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'bank',component:BankComponent},
    {path:'school',component:SchoolComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'activity',component:ActivityComponent},
    {path:'image',component:ImageComponent},
    {path:'contact',component:ContactComponent},
    {path:'detail',component:DetailComponent},
    {path:'details',component:DetailsComponent},
    {path:'practice',component:PracticeComponent},
    {path:'Create',component:CreateComponent, canDeactivate:[notifyGuard]},
    {path:'edit-vehicle/:id',component:CreateComponent},
    {path:'bankadmin',component:BankAdminComponent},
    {path:'create-user',component:CreateUserComponent,canDeactivate:[notifyGuard]},
    {path:'productform',component:ProductformComponent},
    {path:'products',component:ProductsComponent},
    {path:'parent',component:ParentComponent},
    {path:'iteam',component:IteamComponent},
    {path:'nav',component:NavComponent},
    {path:'cart',component:CartComponent},
    {path:'top',component:TopComponent},
    {path:'ceo',component:CeoComponent},
    {path:'company',component:CompanyComponent},
    {path:'info',component:InfoComponent},
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
