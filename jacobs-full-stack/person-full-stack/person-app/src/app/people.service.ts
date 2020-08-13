import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  endpointUrl: string = 'http://localhost:3000/people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<any> {
    return this.http.get(this.endpointUrl);
  }

  addPerson(person): Observable<any> {
    return this.http.post(this.endpointUrl, person);
  }

  deletePerson(id): Observable<any> {
    return this.http.delete(`${this.endpointUrl}/${id}`);
  }
}
