import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatsPage } from './chats.page';
import { Chats } from '../../_interfaces/chats';
import { ChatsService } from '../../_services/chats.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ChatsPage }])
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {

}
