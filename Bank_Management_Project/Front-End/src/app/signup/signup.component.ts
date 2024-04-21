import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeServicesService } from '../home-services.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
constructor(private fb:FormBuilder,private service:HomeServicesService){}
ifsc:number;
bank:Bank;
fg:FormGroup;
ngOnInit(): void {
  this.fg=this.fb.group({
    accNo:[],
    type:[],
    cifNo:[],
    balance:[],
      aadharNo:[],
      contact:[],
      email:[],
      address:[],
      panNo:[]
  });
}
onSubmit(){
  this.service.createAccount(this.fg.value,this.ifsc).subscribe();
}
}
