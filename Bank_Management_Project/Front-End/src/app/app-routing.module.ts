import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceComponent } from './service/service.component';
import { AdsigninComponent } from './adsignin/adsignin.component';
import { BksigninComponent } from './bksignin/bksignin.component';
import { BankDisplayComponent } from './bank-display/bank-display.component';
import { AdDisplayComponent } from './ad-display/ad-display.component';
import { AccDisplayComponent } from './acc-display/acc-display.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signin",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"service",component:ServiceComponent},
  {path:"adsignin",component:AdsigninComponent},
  {path:"bksignin",component:BksigninComponent},
  {path:"bkdisplay/:ifsc",component:BankDisplayComponent},
  {path:"addisplay/:adid",component:AdDisplayComponent},
  {path:"accdisplay/:accNo",component:AccDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
