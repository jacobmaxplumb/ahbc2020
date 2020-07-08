import { Component, OnInit } from '@angular/core';
import { MyObject } from '../my-object';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  objects: MyObject[];
  currentObj: MyObject;

  constructor() { }

  ngOnInit() {
    this.objects = [
      {prop1: 'hello1', prop2: 1},
      {prop1: 'hello2', prop2: 2},
      {prop1: 'hello3', prop2: 3}
    ];
  }

  updateCurrentObject(obj: MyObject) {
    this.currentObj = obj;
  }

}
