import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  myClick(e,arg){
    console.log(e.type,arg);
  }

  myClick2(e,arg){
    console.log(e.type,arg);
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
