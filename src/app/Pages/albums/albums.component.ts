import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/Services/albums.service';
import { error } from 'util';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  title="Albums";
  allAlbums = []
  constructor(private albumsService:AlbumsService) { }

  async ngOnInit() {
    return await this.albumsService.getAlbums().subscribe(albums => this.allAlbums = albums, error => console.error(error))
  }

}
