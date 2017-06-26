import { Component, Inject } from '@angular/core';
import { FluxReducer } from '../common/flux.reducer';
import { PersonDataModel, create} from './person.data.model';

@Component({
  selector: 'add-person-component',
  templateUrl: './add.person.component.html'
})

export class AddPersonComponent {

	formObject: PersonDataModel;

	genderOptions = ['Male', 'Female'];

	constructor(
		@Inject('StateStore') private _localStoragereducer: FluxReducer<PersonDataModel>) {	

		this.formObject = create();
	}

	onAddClick() {
		this._localStoragereducer.add(this.formObject);
		this.formObject = create();
	}

}