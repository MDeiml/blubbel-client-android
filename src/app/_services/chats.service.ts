import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chats } from '../_interfaces/chats';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  _chats: Chats[] = [];
  chatObserver;

  constructor() {
  }

  // get chats
  public getChats(): Observable<Chats[]>{
  	this._chats   = JSON.parse(localStorage.getItem('chats'));

  	const chatObserver = new Observable<Chats[]>(observer => {
		this.chatObserver = observer;
        observer.next(this._chats);
	});
    return chatObserver;
  }

  // make stringified Object in localStorage
  public prepareDeviceStorage():void {
  	var storage	= JSON.parse(localStorage.getItem('chats'));

  	var dummy = [
		{
			type:	'received',
			msg:	'Hello'
		},
		{
			type:	'received',
			msg:	'How you doin?'
		},
		{
			type:	'send',
			msg:	'Hi there'
		}
	]
	var dummy_str = JSON.stringify(dummy);
  	if (storage === null) {
	  	var array	= [
	  		{
	  			username:	'Anonymous User',
	  			uniqueKey:	'l12sDNQ2j1dfdj',
	  			msgs:		dummy_str,
	  			msg_len:	3
	  		},
	  		{
	  			username:	'Uglified User',
	  			uniqueKey:	'pü254Kfdkj4SJN',
	  			msgs:		'[]',
	  			msg_len:	0
	  		},
	  		{
	  			username:	'Hashed User',
	  			uniqueKey:	'äöqri531FLSKw3',
	  			msgs:		'[]',
	  			msg_len:	0
	  		}
	  	];
	  	localStorage.setItem('chats', JSON.stringify(array));
	}
  }
}
