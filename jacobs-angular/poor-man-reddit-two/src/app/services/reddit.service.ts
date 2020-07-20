import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Master } from '../models/master';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditData(link: string): Observable<Master> {
    return this.http.get<Master>(`https://www.reddit.com/r/${link}/.json`);
  }
}
