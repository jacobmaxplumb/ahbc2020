import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { EventParameters } from './models/event-parameters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-event-app';

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  getEvents() {
    console.log(this.eventService.events);
    return this.eventService.events;
  }
}
