import { Component } from '@angular/core';
import { HomeServicesService } from '../home-services.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acc-display',
  templateUrl: './acc-display.component.html',
  styleUrl: './acc-display.component.css'
})
export class AccDisplayComponent {
  constructor(private service:HomeServicesService,private pv:ActivatedRoute,private fb:FormBuilder){}
  tranarr:Transaction[];
  cflag:boolean=false;
  dflag:boolean=false;
  tflag:boolean=false;
  accNo:number;
  ca:number;
  da:number;
  account:string;
  balance:number;
  trans:Transaction=new Transaction();
  fg:FormGroup;
  ngOnInit(): void {
    this.fg=this.fb.group({
      tacc:[],
      amt:[]
    });
    this.pv.params.subscribe(
      (param)=>{
        this.accNo=+param['accNo'];
      }
    );
    console.log(this.accNo);
    this.service.getAccountId(this.accNo).subscribe(
      (a:Account)=>{
        this.tranarr=a.tran;
      }
    );
  }display(name:string) {
    this.account=name;
    console.log(this.account);
   }
   credit(){
    this.cflag=true;
    this.service.credit(this.accNo,this.ca).subscribe(
      (a:number)=>{
            this.balance=a;
      }
    );
   }
   debit(){
    this.cflag=true;
    this.service.debit(this.accNo,this.ca).subscribe(
    (a:number)=>{
          this.balance=a;
    }
  );
}
   tran(){
    let dt=new Date();
    this.trans.faccNo=this.accNo;
    this.trans.taccNo=this.fg.controls['tacc'].value;
    this.trans.amount=this.fg.controls['amt'].value;
    console.log(this.trans.faccNo);
    console.log(this.trans.taccNo);
    this.trans.time=""+this.padZero(dt.getHours())+":"+this.padZero(dt.getMinutes())+":"+this.padZero(dt.getSeconds());
    this.trans.dt=""+this.padZero(dt.getDate())+":"+this.padZero(dt.getMonth()+1)+":"+this.padZero(dt.getFullYear());
    this.trans.status=true
    this.service.createTran(this.trans).subscribe();
    this.service.getAccountId(this.accNo).subscribe(
      (a:Account)=>
        {
          this.balance=a.balance-this.fg.controls['amt'].value;;
        }
    );
    this.tflag=true;
  }
  padZero(month: number): string {
    return month < 10 ? '0' + month : '' + month;
  }

}
