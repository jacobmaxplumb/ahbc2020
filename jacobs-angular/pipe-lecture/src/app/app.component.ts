import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipe-lecture';
  date = 12385923495;
  money = 14.867;
  percent = 0.70;
  date1 = new Date();

  ngOnInit() {
  }

}
