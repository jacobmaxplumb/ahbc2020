// This is going to be a component that will show a list of people that have been filtered
// based of the value that is typed into the filter input

import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[];
  filterInput: string;
  filteredPeople: Person[];

  constructor() {}

  ngOnInit() {
    this.people = [
      {name: 'Jacob', age: 29},
      {name: 'James', age: 29},
      {name: 'Jon', age: 30},
      {name: 'Marie', age: 26},
    ];
    this.filteredPeople = this.people;
  }

  myFunction() {
    this.filteredPeople = this.people.filter(person => person.name.includes(this.filterInput));
  }

}
