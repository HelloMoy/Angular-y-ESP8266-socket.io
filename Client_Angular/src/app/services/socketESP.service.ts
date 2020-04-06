import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class SocketESPService {

  constructor(public wsService: WebsocketService) { }

  sendLED(data: object) {
    const payload = {
      from: 'Angular',
      body: data
    };

    this.wsService.emit('rgbAngular', payload);
  }

  sendToggle(data: object) {
    const payload = {
      from: 'Angular',
      body: data
    };

    this.wsService.emit('toggleAngular', payload);
  }

  getTHC(){
    return this.wsService.listen('thcAngular');
  }

  getPush(){
    return this.wsService.listen('pushAngular');
  }
}
