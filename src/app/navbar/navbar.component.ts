import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ShowDate:Date = new Date();
  EndDate:Date = new Date();
  constructor() { 
  
  }

  ngOnInit(): void {
    this.EndDate.setMinutes(this.ShowDate.getMinutes()+10)
    setInterval(() =>{
     this.EndDate.setSeconds(this.EndDate.getSeconds()-1);
     this.ShowDate = this.EndDate;
    },1000)
  }

}
