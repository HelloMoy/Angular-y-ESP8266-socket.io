import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketESPService } from '../../services/socketESP.service';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RGBComponent implements OnInit {

r = 511.5;
g = 511.5;
b = 511.5;
rpercent: number;
gpercent: number;
bpercent: number;

  constructor(public socketESPService: SocketESPService) { }

  ngOnInit(): void {
    this.rgb();

    this.rpercent = this.convercion(this.r);
    this.gpercent = this.convercion(this.g);
    this.bpercent = this.convercion(this.b);
  }

  rgb() {
    this.socketESPService.sendLED({R: this.r, G: this.g, B: this.b});
    console.log({R: this.r, G: this.g, B: this.b});
  }

  convercion(data: number) {
    const resultado = data / 1023 ;
    return resultado;
    }

}
