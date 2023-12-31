import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { DetailsComponent } from './details/details.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowayprimesComponent } from './twowayprimes/twowayprimes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaluculatorComponent } from './caluculator/caluculator.component';
import { Calaculator2Component } from './calaculator2/calaculator2.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StrucutralDirectivesComponent } from './strucutral-directives/strucutral-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
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
import { CreateUserComponent } from './create-user/create-user.component';
import { ProductformComponent } from './productform/productform.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PricePipe } from './price.pipe';
import { PercentagePipe } from './percentage.pipe';
import { PhonePipe } from './phone.pipe';
import { ImpDirective } from './imp.directive';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IteamComponent } from './iteam/iteam.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InfoComponent,
    DetailsComponent,
    VariableComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowayprimesComponent,
    CaluculatorComponent,
    Calaculator2Component,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    StrucutralDirectivesComponent,
    AttributeDirectivesComponent,
    MarksheetComponent,
    VehicleComponent,
    BankComponent,
    SchoolComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    ImageComponent,
    DetailComponent,
    ContactComponent,
    PracticeComponent,
    CreateComponent,
    BankAdminComponent,
    CreateUserComponent,
    ProductformComponent,
    VehicleDetailsComponent,
    PricePipe,
    PercentagePipe,
    PhonePipe,
    ImpDirective,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    IteamComponent,
    NavComponent,
    CartComponent,
    TopComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
