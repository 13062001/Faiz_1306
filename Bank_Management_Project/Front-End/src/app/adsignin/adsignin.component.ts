import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adsignin',
  templateUrl: './adsignin.component.html',
  styleUrl: './adsignin.component.css'
})
export class AdsigninComponent {
  constructor(private fb:FormBuilder){}
  fg:FormGroup;
  ngOnInit(): void {
    this.fg=this.fb.group({
      adid:[],
      adname:[],
      adpass:[],
    });
  }
  onSubmit(){
    console.log(this.fg.value)
  }
}
