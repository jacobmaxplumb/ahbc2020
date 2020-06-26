import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jacob';
  isHidden = false;
  hello = 'bye';
  formInput = 'something';

  sayHello(e) {
    this.formInput = 'hello';
  }
}

