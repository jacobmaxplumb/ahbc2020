import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Genres } from './genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-login';

  loginFormSubmitted(data: NgForm) {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
    console.log(Genres.COMEDY);
    console.log(data.value);
  }
}

