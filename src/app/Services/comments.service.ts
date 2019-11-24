import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComments } from '../Models/comments.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  getComments(): Observable<IComments[]> {
    return this.http.get<IComments[]>(this.commentsUrl);
  }
}
