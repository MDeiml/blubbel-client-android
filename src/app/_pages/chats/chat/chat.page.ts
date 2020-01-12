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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  	this.data = this.route.snapshot.params;
  	console.log(this.data);
    this.messages = JSON.parse(this.data.msgs);
  }

}
