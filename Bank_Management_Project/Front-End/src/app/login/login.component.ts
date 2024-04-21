import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  constructor(private route:Router){}

  account:string;
  bifsc:number;
  adid:number;
  accNo:number;

  display(name:string) {
   this.account=name;
   console.log(this.account);
  }

 reg() {
  if(this.account=='admin'){
      this.route.navigateByUrl("/adsignin");
  }
    else if(this.account=='bank'){
      this.route.navigateByUrl("/bksignin");
  }
    else if(this.account=='custumer'){
      this.route.navigateByUrl("/signin");
  }
}
onSubmit() {
  if(this.account=='admin'){
      this.route.navigateByUrl("/adsignin"+this.adid);
  }
    else if(this.account=='bank'){
      this.route.navigateByUrl("/bkdisplay/"+this.bifsc);
  }
    else if(this.account=='custumer'){
      this.route.navigateByUrl("/accdisplay/"+this.accNo);
  }
}
}
