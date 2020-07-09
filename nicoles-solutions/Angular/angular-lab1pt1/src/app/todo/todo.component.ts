import { Component, OnInit } from "@angular/core";
import { ToDo } from "../to-do";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todoList: ToDo[] = [
    { task: "wash my car", completed: true },
    { task: "do the dishes", completed: false },
    { task: "dye my hair", completed: false },
    { task: "go on vacation", completed: false },
  ];
  addItemInput: string = "";
  filteredTasks;
  constructor() {}

  ngOnInit(): void {}
  completeTask(i) {
    console.log(i);
    this.todoList[i].completed = true;
  }

  addTask(): void {
    let todo: ToDo = {
      task: this.addItemInput,
      completed: false,
    };
    this.todoList.push(todo);
  }
  removeTask(index: number): void {
    this.todoList.splice(index, 1);
  }
  filterTasks() {
    if (!this.filteredTasks) {
      return this.todoList;
    }
    return this.todoList.filter((item) =>
      item.task.includes(this.filteredTasks)
    );
  }
}
