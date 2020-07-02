import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {

  count: number;

  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  incrementUp() {
    this.count++;
  }

}

// I was an army sniper
// I have been to 37 states
// I have a publication in biology

