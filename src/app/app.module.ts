import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FootballEventsComponent } from './football-events/football-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

import { FootballService } from './service/football.service';
import { WebSocketService } from './service/web-socket.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FootballEventsComponent,
    EventDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: FootballEventsComponent },
      { path: 'events', component: FootballEventsComponent },
      { path: 'details', component: EventDetailsComponent },
    ])
  ],
  providers: [FootballService, WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
