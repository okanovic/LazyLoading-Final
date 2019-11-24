import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhotos } from '../Models/photos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photosUrl = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http:HttpClient) { }

  getPhotos():Observable<IPhotos[]>{
    return this.http.get<IPhotos[]>(this.photosUrl)
  }
}
