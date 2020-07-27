import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { NgForm } from '@angular/forms';
import { EventParameters } from 'src/app/models/event-parameters';
import { EventSearchParameters } from 'src/app/models/event-search-parameters';

@Component({
  selector: 'app-event-search-form',
  templateUrl: './event-search-form.component.html',
  styleUrls: ['./event-search-form.component.css']
})
export class EventSearchFormComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  eventFormSubmitted(data: any) {
    const parameters: EventSearchParameters = {
      keyword: data.keyword,
      city: data.city,
      postalcode: data.postalcode,
      startDate: '',
      endDate: '',
    };
    this.eventService.getEvents(parameters).subscribe((data: any) => {
      this.eventService.events = data._embedded.events;
    });
    // this.eventService.getEvents(parameters).subscribe(this.onSuccess.bind(this), this.onError.bind(this));
  }

  // onSuccess(data) {
  //   this.eventService.events = data._embedded.events ? data._embedded.events : [];
  // }

  // onError(error: Error) {
  //   console.log(error.message);
  // }

}
