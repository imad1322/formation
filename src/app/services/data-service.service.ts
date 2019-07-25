import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  constructor(public http:HttpClientModule) {

  }

  getPersone(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(res=>res.json);
  }
 
}






