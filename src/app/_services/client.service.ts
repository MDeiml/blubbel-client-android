import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  socket: any;

  constructor() {
  }

  public connect(ip: string, port: number): void {
    (window as any).chrome.sockets.tcp.create({}, createInfo => {
      (window as any).chrome.sockets.tcp.connect(createInfo.socketId, ip, port, result => {
        this.socket = createInfo;
      });
    });
  }

  public sendMessage(userPublicKey: any, message: string): void {
  }

  public getMessages(): Observable<any> {
    const observable = new Observable<any>(observer => {
    });
    return observable;
  }

}

