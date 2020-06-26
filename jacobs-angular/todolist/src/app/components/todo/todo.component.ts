import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoItems: Todo[];

  constructor() {
    this.todoItems = [
      {task: 'get dry cleaning', completed: false},
      {task: 'get wet cleaning', completed: true},
      {task: 'get damp cleaning', completed: false},
    ];
  }
}
