import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.page.html',
  styleUrls: ['./todo-create.page.scss'],
})
export class TodoCreatePage implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }
  types;
  todos = [];
  ngOnInit() {
    this.types = Object.keys(this.todoService.getAllTodo());
  }

  saveTodo(cat, todo) {
    this.todoService.saveTodo(cat, todo);
    this.router.navigate(["/todo"]);
  }

  getToDo(todo) {
    this.todos = this.todoService.getTodo(todo);
  }

}
