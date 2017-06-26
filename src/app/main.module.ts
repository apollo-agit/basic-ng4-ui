import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { appRoutes, appRoutingProviders } from './common/app.routes';
import { PersonModule } from './person/person.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    PersonModule,
    appRoutes
  ],
  declarations: [
  	MainComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ 
  	MainComponent 
  ]
})

export class MainModule { }