import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceComponent } from './service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BksigninComponent } from './bksignin/bksignin.component';
import { AdsigninComponent } from './adsignin/adsignin.component';
import { HttpClientModule } from '@angular/common/http';
import { BankDisplayComponent } from './bank-display/bank-display.component';
import { AdDisplayComponent } from './ad-display/ad-display.component';
import { AccDisplayComponent } from './acc-display/acc-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    SignupComponent,
    ServiceComponent,
    BksigninComponent,
    AdsigninComponent,
    BankDisplayComponent,
    AdDisplayComponent,
    AccDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
