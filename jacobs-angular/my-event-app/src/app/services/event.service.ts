import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventParameters } from '../models/event-parameters';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: any = [];

  constructor(private http: HttpClient) { }

  getEvents(data: any): Observable<any> {
    const parameters = {
      apikey: '7Cmy3kgBR6kkhN5yG3H1reD3UD9YByoF',
      keyword: data.keyword ? data.keyword : '',
      city: data.city ? data.city : '',
      postalcode: data.postalcode ? data.postalcode : ''
    };
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events', {params: parameters});
  }
}
