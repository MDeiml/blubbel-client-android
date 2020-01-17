import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  QRStr:string  = '';
  QRType:string = 'url';
  QRLvl:number  = 6;

  constructor() { }

  ngOnInit() {
  	this.QRStr = this.setQRContext();
  }

  /* set QR-Code configuration */
  private setQRContext() {
    var str  = 'blubbel::user:abcdefghi';
    return str;
  }

}
