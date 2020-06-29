import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems: TodoItem[] = [
    {completed: true, task: 'task 1'},
    {completed: false, task: 'task 2'},
    {completed: true, task: 'task 3'}
  ];

  ngOnInit() {
  }

  addItem() {
    const todoItem: TodoItem = {
      completed: false,
      task: 'task 4'
    };
    this.todoItems.push(todoItem);
  }

  itemClicked(item: TodoItem) {
    console.log(item);
    item.completed = !item.completed;
  }

}
