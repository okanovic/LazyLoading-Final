import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/Services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  title="Photos"
  allPhotos = [];
  constructor(private photosService:PhotosService) { }

  async ngOnInit() {
    return await this.photosService.getPhotos().subscribe(photo => this.allPhotos = photo, error => console.error(error))
  }

}
