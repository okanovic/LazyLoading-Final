import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsers } from '../Models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = "https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) {  }
  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.usersUrl)
  }
}
