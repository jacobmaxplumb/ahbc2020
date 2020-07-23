import { Component } from '@angular/core';
import { Person } from './person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personFormSubmitted(formData: NgForm) {
    console.log(formData);
  }

  searchFormSubmitted(data: NgForm) {
    console.log(data.value);
  }
}
