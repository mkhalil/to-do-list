import {Component, OnInit} from '@angular/core';
import {Todo} from './Todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'to-do-list';

  todoList: Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.refreshTodolist();
  }

  refreshTodolist() {
    this.todoService.findAll().subscribe(result => this.todoList = result);
  }
}
