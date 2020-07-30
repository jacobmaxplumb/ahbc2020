import { Component } from '@angular/core';
import { Person } from './person';
import { NgForm } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  personFormSubmitted(data: NgForm) {
    console.log(data);
  }
}
