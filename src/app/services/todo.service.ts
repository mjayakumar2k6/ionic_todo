import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoData = {
    "Work": [],
    "Music": [],
    "Travel": [],
    "Study": [],
    "Home": [],
    "Shopping": []
  };
  constructor() { 
    let todos = localStorage.getItem("todos");
    if(!todos) {
      localStorage.setItem("todos", JSON.stringify(this.todoData))
    } else {
      this.todoData = JSON.parse(todos);
    }
  }

  public getAllTodo() {
    return this.todoData;
  }

  saveTodo(cat, val) {
    this.todoData[cat].push(val);
    localStorage.setItem("todos", JSON.stringify(this.todoData));
  }

  getTodo(todo) {
    return this.todoData[todo];
  }
}
