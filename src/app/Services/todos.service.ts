import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodos } from '../Models/todos.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todosUrl="https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient) { }

  getTodos():Observable<ITodos[]>{
    return this.http.get<ITodos[]>(this.todosUrl)
  }
}
