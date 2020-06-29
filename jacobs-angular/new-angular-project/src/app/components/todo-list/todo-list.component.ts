import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'string';
  todoItem: Todo[] = [{task: 'hello', completed: true}];

  constructor() { }

  ngOnInit() {
  }

}
