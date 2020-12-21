import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 time=120;
 showTime:String="";
  constructor() { 
  
  }

  ngOnInit(): void {
   setInterval(() =>{

   this.showTime =Math.round(this.time/60)+ "m  " + (this.time%60) + "ss";
     this.time = this.time -1;
     
     
    },1000)
  }
}
