import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() todoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
