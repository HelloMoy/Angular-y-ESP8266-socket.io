import { Component, OnInit } from '@angular/core';
import { SocketESPService } from '../../services/socketESP.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

toggle1 = false;
toggle2 = true;

  constructor(public socketESPService: SocketESPService) { }

  ngOnInit(): void {
    this.switch();
  }

  switch() {
    console.log({toggle1: this.toggle1, toggle2: this.toggle2});
    this.socketESPService.sendToggle({toggle1: this.toggle1, toggle2: this.toggle2});
   }

}
