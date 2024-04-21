import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../home-services.service';
import { Bank } from '../bank';
import { Account } from '../account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank-display',
  templateUrl: './bank-display.component.html',
  styleUrl: './bank-display.component.css'
})
export class BankDisplayComponent implements OnInit{
constructor(private service:HomeServicesService,private pv:ActivatedRoute){}
accarr:Account[];
id:number;
ngOnInit(): void {
  this.pv.params.subscribe(
    (param)=>{
      this.id=+param['ifsc'];
    }
  );
  console.log(this.id);
  this.service.getBankId(this.id).subscribe(
    (a:Bank)=>{
      this.accarr=a.al;
    }
  );
}
}
