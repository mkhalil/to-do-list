import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Todo} from './Todo';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos: Todo[] = [
      {id: 1, task: 'Task 1', done: false},
      {id: 2, task: 'Task 2', done: false},
      {id: 3, task: 'Task 3', done: false},
      {id: 4, task: 'Task 4', done: false},
      {id: 5, task: 'Task 5', done: false},
    ];
    return {todos};
  }

  genId(todoList: Todo[]): number {
    return todoList.length > 0 ? Math.max(...todoList.map(hero => hero.id)) + 1 : 11;
  }
}
