import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	public _user: User;

	constructor() { }

	// prepare user
	public prepareUser():void {
		if (!this.checkIfUserInfoExists()) {
			this.createUserData();
		}
	}

	// checks if users information is saved on device
	private checkIfUserInfoExists() {
		var storage = localStorage.getItem('user');
		return (storage === null) ? false : true;
	}

	// generates unique user information
	private createUserData():void {
		// TODO: generate unique key
		var userData = {
			uniqueKey	: 'Add encrypted string here..',
			settings	: {}
		}
		// save on Device
		localStorage.setItem('user', JSON.stringify(userData));
	}

	// return Users Data
	private getUserData() {
		// get data from device and return
		var storageData = localStorage.getItem('user');
		storageData		= JSON.parse(storageData);
		return storageData;
	}
}
