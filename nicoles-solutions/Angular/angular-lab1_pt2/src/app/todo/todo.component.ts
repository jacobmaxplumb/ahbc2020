import { Component } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { NgForm } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  todos: Todo[] = [
    {
      task: "fold clothes",
      completed: false
    },
    {
      task: "put clothes in dresser",
      completed: false
    },
    {
      task: "relax",
      completed: false
    }
  ];
  // todo: Todo = {
  //   task: "",
  //   completed: false
  // };

  completeTask(index: number) {
    this.todos[index].completed = true;
  }
  deleteTask(index:number){
    this.todos.forEach()
  }
  // addTodo() {
  //   this.todos.push(this.todo);
  //   // this.todo = {
  //   //   task: "",
  //   //   completed: false
  //   // };
  // }
  addTodo(form: NgForm) {
    this.todos.push({ task: form.value.todo, completed: false });
    form.reset();
  }
}
