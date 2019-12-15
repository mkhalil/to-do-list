import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() refreshTodoListEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  delete(todo: Todo) {
    this.todoService.delete(todo).subscribe(() => this.refreshTodoListEventEmitter.emit(),
      error => console.error('Delete error' + error));
  }

  done(todo: Todo, isDone: boolean) {
    const todoToUpdate = {...todo, done: isDone};
    this.todoService.update(todoToUpdate).subscribe(() => this.refreshTodoListEventEmitter.emit(),
      error => console.error('Update error' + error)
    );
  }
}
