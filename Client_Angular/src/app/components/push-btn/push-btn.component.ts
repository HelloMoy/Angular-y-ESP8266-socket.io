import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketESPService } from '../../services/socketESP.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-push-btn',
  templateUrl: './push-btn.component.html',
  styleUrls: ['./push-btn.component.css']
})
export class PushBTNComponent implements OnInit {

  msgSubscription: Subscription;
  push: string;

  constructor(public socketESPService: SocketESPService) { }

  ngOnInit(): void {
    this.msgSubscription = this.socketESPService.getPush().subscribe(data => {
      this.push  = data as any;
      console.log(this.push);
    });
  }

  ngOnDestroy() {
    this.msgSubscription.unsubscribe();
  }

}
