import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  nom:string="";
  prenom:string="";
  age:number=0;
  myShop:string[]=['apple','win','io','div'];

  //mySubmit(){
  //  this.myShop.push(this.nom);
  //  this.nom="";
  //}

  constructor() {

   }

  ngOnInit() {
  }

}
