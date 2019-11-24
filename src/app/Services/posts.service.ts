import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from '../Models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsUrl = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.postsUrl)
  }
}
