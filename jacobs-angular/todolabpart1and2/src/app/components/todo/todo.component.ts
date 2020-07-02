import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoItem[];

  constructor() {
   }

  ngOnInit() {
    this.todos = [
      {task: 'task one', completed: true},
      {task: 'task two', completed: false},
      {task: 'task three', completed: false},
    ];
  }

}
