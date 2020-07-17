import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Main } from '../models/main';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Main> {
    return this.http.get<Main>(`https://www.reddit.com/r/aww/.json`);
  }
}
