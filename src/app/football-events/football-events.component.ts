import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';
import { Subscription, Observable, Subject} from 'rxjs';
export interface Message {
  message: string;
}
@Component({
  selector: 'app-football-events',
  templateUrl: './football-events.component.html',
  styleUrls: ['./football-events.component.css']
})
export class FootballEventsComponent implements OnDestroy, OnInit {

  messageFromServer: string;
  wsSubscription: Subscription;
  content: any;
  events: any;
  className: string;
  eventID: string;
  competitors: any;
  competitorHome: string;
  comptitorAway: string;

  // public messages: Subject<Message>;

  constructor(private webSocketService: WebSocketService) {
    // this.messages = <Subject<Message>>webSocketService.connect('ws://localhost:8889/football/live').map(
    //   (response:MessageEvent): Message =>{
    //   let data = JSON.parse(response.data);
    //   return {
    //     message : data,
    //   }
    // })
  }

  ngOnInit() {
    // let ws = new WebSocket('ws://localhost:8889');
    // ws.send(JSON.stringify({ type: 'getLiveEvents' }));
    this.wsSubscription = this.webSocketService.connect('ws://localhost:8889')
    .subscribe(data => {
      this.content = data;
      console.log(this.content);
    });
  }

  ngOnDestroy() {
    this.wsSubscription.unsubscribe();
  }

}
