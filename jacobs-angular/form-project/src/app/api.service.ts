import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://api.hello.com"

  constructor(private http: HttpClient) { }

  getList(searchTerm: string): Observable<any> {
    return this.http.get(`${this.url}`, {params: {q: searchTerm, another: 'hello'}});
  }
}
