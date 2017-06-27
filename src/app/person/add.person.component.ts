import { Component, Inject, OnInit } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PersonDataModel, create} from './person.data.model';

@Component({
  selector: 'add-person-component',
  templateUrl: './add.person.component.html'
})

export class AddPersonComponent implements OnInit {

	formObject: PersonDataModel;

	allAddUsersObject: Array<String>;

	genderOptions = ['Male', 'Female'];

	constructor(
		@Inject('StateStore') private _localStoragereducer: FluxReducer<PersonDataModel>) {	

		this.formObject = create();
	}

	ngOnInit() {
			this._localStoragereducer.backingObject.subscribe(data => {
			if (data) {
				this.displayAllAddedUsers(data);
			}
		});

		this._localStoragereducer.load();
	}

	onAddClick() {
		this._localStoragereducer.add(this.formObject);
		this.formObject = create();
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