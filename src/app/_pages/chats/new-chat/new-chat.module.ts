import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewChatPageRoutingModule } from './new-chat-routing.module';

import { NewChatPage } from './new-chat.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewChatPageRoutingModule,
    NgxQRCodeModule
  ],
  providers: [BarcodeScanner],
  declarations: [NewChatPage]
})
export class NewChatPageModule {}
