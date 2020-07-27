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
  returnObject: any;

  constructor(private apiService: ApiService) {}

  personFormSubmitted(formData: NgForm) {
    console.log(formData);
  }

  searchFormSubmitted(data: NgForm) {
    const s = data.value.searchTerm;
    this.apiService.getList(s).subscribe((data) => { this.returnObject = data }, (error) => { console.log(`error was hit ${error}`) })
  }
}
