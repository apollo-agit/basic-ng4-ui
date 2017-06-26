import { Inject, Injectable } from '@angular/core';
import { AbstractModel } from '../common/abstract.model';

export interface PersonDataModel extends AbstractModel {
	firstName: string,
	middleName: string,
	lastName: string,
	age: number,
	hairColor: string,
	eyeColor: string,
	gender: string
}

export function create() {
	return {firstName: "", middleName: "", lastName: "", age: 0, hairColor: "", eyeColor: "", gender: "Male"};
}
