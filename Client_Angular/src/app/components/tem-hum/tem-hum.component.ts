import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketESPService } from '../../services/socketESP.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tem-hum',
  templateUrl: './tem-hum.component.html',
  styleUrls: ['./tem-hum.component.css']
})
export class TemHumComponent implements OnInit, OnDestroy {
  msgSubscription: Subscription;
  dth11: {};
  humedad: string;
  temperatura: string;

  constructor(public socketESPService: SocketESPService) { }

  ngOnInit(): void {
    this.msgSubscription = this.socketESPService.getTHC().subscribe(data => {
      this.dth11  = data as any;
      this.humedad = (this.dth11 as any).Humedad;
      this.temperatura = (this.dth11 as any).Temperatura;
    });
  }

  ngOnDestroy() {
    this.msgSubscription.unsubscribe();
  }

}
