import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<any> {
    return this.http.get(`https://grandcircusco.github.io/demo-apis/blog-posts.json`);
  }
}
