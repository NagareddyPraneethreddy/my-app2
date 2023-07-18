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
    BankAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }