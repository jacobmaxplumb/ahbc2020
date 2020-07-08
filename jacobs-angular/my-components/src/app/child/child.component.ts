import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyObject } from '../my-object';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() obj: MyObject;
  @Output() setObj = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.setObj.emit(this.obj);
  }

}

