import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import {DataServiceService} from './services/data-service.service' ;
//import { HttpModule } from '@angular/Http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NajibComponent } from './components/najib/najib.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { FormsComponent } from './components/forms/forms.component';
import { SComponentComponent } from './components/s-component/s-component.component';
import { from } from 'rxjs';
import { Server } from 'net';

@NgModule({
  declarations: [
    AppComponent,
    NajibComponent,
    EventsComponent,
    CeventsComponent,
    FormsComponent,
    SComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // HttpModule
   HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
