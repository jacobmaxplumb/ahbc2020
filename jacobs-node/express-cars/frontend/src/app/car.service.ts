import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endpoint = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
