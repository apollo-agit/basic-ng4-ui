/*
* This file houses all the modules routes in 
* the applicaiton, which we will bootstrap in main ts
*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPersonComponent } from '../person/add.person.component';
import { SearchPersonComponent } from '../person/search.person.component';


const routes: Routes = [
	{ path: 'add', component: AddPersonComponent},
	{ path: 'search', component: SearchPersonComponent }
]

export const appRoutingProviders: any[] = [];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);