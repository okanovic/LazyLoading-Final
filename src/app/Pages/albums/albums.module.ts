import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { RouterModule } from '@angular/router';

export const albumRouting = [
  { path: '', component: AlbumsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(albumRouting)
  ],
  exports: [RouterModule],
  declarations: [AlbumsComponent],
  providers: [],
})
export class AlbumsModule { }
