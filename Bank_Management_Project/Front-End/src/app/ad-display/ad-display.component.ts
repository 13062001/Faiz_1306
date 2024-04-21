import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../home-services.service';
import { Bank } from '../bank';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-display',
  templateUrl: './ad-display.component.html',
  styleUrl: './ad-display.component.css'
})
export class AdDisplayComponent implements OnInit {
  constructor(private service:HomeServicesService,private pv:ActivatedRoute){}
  bankarr:Bank[];
  id:number;
  ngOnInit(): void {
    this.pv.params.subscribe(
      (param)=>{
        this.id=+param['id'];
      }
    );
    console.log(this.id);
    this.service.getBank().subscribe(
      (a:Bank[])=>{
        this.bankarr=a;
      }
    );
  }
  
}
