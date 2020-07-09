import { Component, OnInit } from "@angular/core";
import { ToDo } from "../interfaces/to-do";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todoList: ToDo[] = [
    { task: "wash my hands", completed: false },
    { task: "do laundry", completed: true },
    { task: "walk the dog", completed: false },
    { task: "do homework", completed: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
