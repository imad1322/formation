import { Component, OnInit } from '@angular/core'; 
import { DataServiceService } from '../../services/data-service.service';


@Component({
  selector: 'app-s-component',
  templateUrl: './s-component.component.html',
  styleUrls: ['./s-component.component.css']
})
export class SComponentComponent implements OnInit {

  users:any[]=[];

  constructor(public dataService:DataServiceService) {

  this.dataService.getPersone().subscribe(users=>{
        this.users=users;
  });
   }

  ngOnInit() {
    
  }

}
