import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  data: any;
  messages: [];

  tabBarElement;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  	this.data = this.route.snapshot.params;
  	console.log(this.data);
    this.messages = JSON.parse(this.data.msgs);
    this.hideTabBar();
  }

  ngOnDestroy() {
    this.showTabBar();
  }

  public hideTabBar():void {
    (document.querySelector('#blubble-tabbar') as HTMLElement).style.height = '0';
  }

  public showTabBar():void {
    (document.querySelector('#blubble-tabbar') as HTMLElement).style.height = '57px';
  }

}
