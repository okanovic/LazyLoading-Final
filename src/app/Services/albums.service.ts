import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAlbums } from '../Models/albums.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albumsUrl = "https://jsonplaceholder.typicode.com/albums"
  constructor(private http: HttpClient) { }

  getAlbums():Observable<IAlbums[]>{
   return this.http.get<IAlbums[]>(this.albumsUrl)
  }
  
}
