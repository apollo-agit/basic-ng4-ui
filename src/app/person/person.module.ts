import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AddPersonComponent } from '../person/add.person.component';
import { SearchPersonComponent } from '../person/search.person.component';
import { FluxReducer } from '../common/flux.reducer';
import { LocalStorageService } from '../common/localstorage.service';
import { MdButtonModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdButtonModule
  ],
  declarations: [
  	AddPersonComponent,
    SearchPersonComponent
  ],
  providers: [
    { provide: 'key', useValue: 'basicui-state' },
    { provide: 'BackendService', useClass: LocalStorageService },
    { provide: 'StateStore', useClass: FluxReducer }
  ],
  bootstrap: [ 
  	AddPersonComponent, 
    SearchPersonComponent
  ]
})

export class PersonModule { }