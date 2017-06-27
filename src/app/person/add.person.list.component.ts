import { Component, Inject, OnInit } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PersonDataModel } from './person.data.model';

@Component({
  selector: 'person-list',
  templateUrl: './add.person.list.component.html'
})


export class AddPersonListComponent implements OnInit {
	
	allAddUsersObject: Array<String>;

	constructor(
		@Inject('StateStore') private _localStoragereducer: FluxReducer<PersonDataModel>) {	
	}

	ngOnInit() {
			this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.displayAllAddedUsers(data);
			}
		});

		this._localStoragereducer.load();
	}

	displayAllAddedUsers(personData: Array<PersonDataModel>) {
		this.allAddUsersObject = new Array<String>();

		for (var i = 0; i < personData.length; i++)
		{
		  let person: PersonDataModel = personData[i];
		  let name = person.firstName + ' ' + person.lastName;
		  this.allAddUsersObject.push(name);
		}
	}

}