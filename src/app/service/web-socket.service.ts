import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as Rx from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  ws: WebSocket;
  socketIsOpen = 1; // WebSocket's open

  private subject: Rx.Subject<MessageEvent>;

  public connect(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }


  public create(url): Rx.Subject<MessageEvent> {
    const ws = new WebSocket(url);
    const observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    const observer = {
      next: (data: object) => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log(JSON.stringify(data));
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Rx.Subject.create(observer, observable);
  }

}
