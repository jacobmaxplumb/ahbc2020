import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-info',
  templateUrl: './circle-info.component.html',
  styleUrls: ['./circle-info.component.css']
})
export class CircleInfoComponent implements OnInit {

  diameter: number;

  constructor() { }

  ngOnInit() {
    this.diameter = 100;
  }

}
