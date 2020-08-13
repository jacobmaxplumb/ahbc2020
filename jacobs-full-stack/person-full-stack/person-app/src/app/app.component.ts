import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: any[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  personFormSubmitted(person) {
    this.peopleService.addPerson(person).subscribe(data => {
      console.log(data);
      this.peopleService.getPeople().subscribe(d => {
        this.people = d;
      });
    });
  }

  deletePerson(id) {
    this.peopleService.deletePerson(id).subscribe(() => {
      this.peopleService.getPeople().subscribe(d => {
        this.people = d;
      });
    });
  }
}
