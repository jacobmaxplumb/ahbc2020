import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogInfo(): Observable<any> {
    // const obs = this.http.get(`https://grandcircusco.github.io/demo-apis/blog-posts.json`);
    // return obs;
    console.log(Math.sqrt(Number.MAX_VALUE));
    return this.http.get(`https://grandcircusco.github.io/demo-apis/blog-posts.json`);
  }
}

