import { Component, OnInit } from '@angular/core';
import { Persons } from './Persons'; 

@Component({
  selector: 'app-najib',
  templateUrl: './najib.component.html',
  styleUrls: ['./najib.component.css']
})
export class NajibComponent implements OnInit {

  
  totalClass={};
  myClassCss=false;
  myClassCss2=false;

  classFunction(){
    this.totalClass={
      myClass:this.myClassCss,
      myClass2:this.myClassCss2
    }

  }

  people=['ahmed','ali','karim','jawad','sabah'];
  job=['tech','dev','pro','ouv','qua'];

  car=[
    {nom:'nom1',id:1},
    {nom:'nom2',id:2},
    {nom:'nom3',id:3},
    {nom:'nom4',id:4},
    {nom:'nom5',id:5}
  ]
 

  constructor() { 
     
  }

  ngOnInit() {
   
  }

}

