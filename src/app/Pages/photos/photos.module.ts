import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule } from '@angular/router';

export const photosRouting = [
  { path: '', component: PhotosComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(photosRouting)
  ],
  exports: [RouterModule],
  declarations: [PhotosComponent],
  providers: [],
})
export class PhotosModule { }
