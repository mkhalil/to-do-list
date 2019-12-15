import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from './Todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private toDoUrl = 'http://localhost:8080/api/todos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.toDoUrl).pipe(
      catchError(this.handleError<Todo[]>('get all Todo', []))
    );
  }


  add(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.toDoUrl, todo,  this.httpOptions).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  delete(todo: Todo): Observable<any> {
    return this.httpClient.delete<any>(`${this.toDoUrl}/${todo.id}`, this.httpOptions).pipe(
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  update(todo: Todo): Observable<any> {
    console.log(todo);
    return this.httpClient.put<any>(`${this.toDoUrl}/${todo.id}`, todo, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
