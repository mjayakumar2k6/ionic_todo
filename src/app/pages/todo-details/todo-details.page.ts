import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  category;
  todos;
  constructor(private route: ActivatedRoute, private todoService: TodoService) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get("todo");
    this.todos = this.todoService.getTodo(this.category);
  }

}
