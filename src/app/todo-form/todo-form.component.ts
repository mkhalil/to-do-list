import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Todo} from '../Todo';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() refreshTodoListEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  todoFormGroup = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }


  onSubmit() {
    const taskValue: string = this.todoFormGroup.get('task').value;
    const newToDo: Todo = {id: null, task: taskValue, done: false};
    this.todoService.add(newToDo).subscribe(() => {
        this.refreshTodoListEventEmitter.emit();
      },
      error => console.error('Save error' + error));
  }

}
