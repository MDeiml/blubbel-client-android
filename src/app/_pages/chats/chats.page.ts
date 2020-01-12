import { NgModule, Component, OnInit } from '@angular/core';
import { Chats } from '../../_interfaces/chats';
import { ChatsService } from '../../_services/chats.service';

@Component({
  selector: 'chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss']
})
export class ChatsPage implements OnInit {

  _chats: Chats[] = [];
  chatObserver;

  constructor(protected _chatsService: ChatsService) {}

  ngOnInit() {
  	this.chatObserver = this._chatsService.getChats();
  	this.getChatData();
  	console.log(this._chats);
  }

  // get Chats from Storage
  private getChatData() {
    this.chatObserver.subscribe((data: Chats[]) => {
      this._chats = data;
    });
  }

}
