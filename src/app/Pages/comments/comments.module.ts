import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { RouterModule } from '@angular/router';

export const commentsRouting = [
  { path: '', component: CommentsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commentsRouting)
  ],
  exports: [RouterModule],
  declarations: [CommentsComponent],
  providers: [],
})
export class CommentsModule { }
