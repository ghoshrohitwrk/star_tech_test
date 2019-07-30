import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-football-events',
  templateUrl: './football-events.component.html',
  styleUrls: ['./football-events.component.css']
})
export class FootballEventsComponent implements OnInit {

  messageFromServer: string;
  wsSubscription: Subscription;
  status;
  content: any;
  events: any;
  className: string;
  eventID: string;
  competitors: any;
  competitorHome: string;
  comptitorAway: string;

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const data = await this.webSocketService.connect('ws://localhost:8888/football/live');
    console.log(JSON.stringify(data));
  }

}
