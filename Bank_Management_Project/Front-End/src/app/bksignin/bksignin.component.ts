import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-bksignin',
  templateUrl: './bksignin.component.html',
  styleUrl: './bksignin.component.css'
})
export class BksigninComponent {
  constructor(private fb:FormBuilder,private service:HomeServicesService){}
  fg:FormGroup;
  ngOnInit(): void {
    this.fg=this.fb.group({
      bname:[],
        bifsc:[],
        bcontact:[],
        bemail:[],
        baddress:[]
    });
  }
  onSubmit(){
    console.log(this.fg.value)
    this.service.createBank(this.fg.value).subscribe();
  }
}
