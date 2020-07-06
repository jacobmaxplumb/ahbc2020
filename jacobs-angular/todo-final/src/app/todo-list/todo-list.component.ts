import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: TodoItem[];
  filterInput: string;
  addItemInput: string;

  constructor() { }

  ngOnInit() {
    this.todoList = [
      {task: 'pick up grandma', completed: false},
      {task: 'get milk', completed: true},
      {task: 'buy plane ticket', completed: false},
    ];
  }

  removeItem(i: number): void {
    this.todoList.splice(i, 1);
  }

  addItem() {
    const taskValue: string = this.addItemInput;
    const newTodoItem: TodoItem = {
      task: taskValue,
      completed: false
    };
    this.todoList.push(newTodoItem);
  }

  sayHello() {
    return 'hello';
  }

  filter() {
    if (!this.filterInput) {
      return this.todoList;
    }
    return this.todoList.filter(todo => todo.task.includes(this.filterInput));
  }
}
