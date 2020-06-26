import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noun: string;
  adverb: string;
  specialClassList: object;
  specialStyleList: object;
  showText: boolean = false;
  numberList: string[] = ['zero', 'one', 'two', 'three', 'four'];

  constructor() {
    this.specialClassList = {
      red: true,
      backBlue: false,
    };

    this.specialStyleList = {
      'color': 'red'
    };

    for (const num of this.numberList) {
      console.log(num);
    }

  }

  changeColors() {
    this.showText = true;
    this.specialClassList['textBorder'] = true;
    this.numberList.push('five');
  }

}
