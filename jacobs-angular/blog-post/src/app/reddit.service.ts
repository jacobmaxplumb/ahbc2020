import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor() { }

  getRedditPosts() {
    return Observable.create({});
  }
}
