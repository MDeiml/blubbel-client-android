import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.page.html',
  styleUrls: ['./new-chat.page.scss'],
})
export class NewChatPage implements OnInit {

  constructor(
    private _barcodeScanner: BarcodeScanner,
    private _barcodeScannerOptions: BarcodeScannerOptions
  ) { }

  ngOnInit() {
    /* Tab Control */
  	this.hideTabBar();
  }

  ngOnDestroy() {
    /* Tab Control */
    this.showTabBar();
  }

  /* Tab Control */
  public hideTabBar():void {
    (document.querySelector('#blubble-tabbar') as HTMLElement).style.height = '0';
  }

  /* Tab Control */
  public showTabBar():void {
    (document.querySelector('#blubble-tabbar') as HTMLElement).style.height = '57px';
  }

  public scanned: string;
  public scanCode() {
    this._barcodeScanner.scan().then((codeData) => {
      this.scanned = codeData.text;
    }, (error) => {
      console.log('error while scanning QR-Code: ', error);
      this.scanned = 'error while scanning QR-Code: ' + error;
    })
  }

}
