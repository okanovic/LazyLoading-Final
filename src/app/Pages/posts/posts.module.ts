import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';

export const postsRouting = [
  { path: '', component: PostsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRouting)
  ],
  exports: [RouterModule],
  declarations: [PostsComponent],
  providers: [],
})
export class PostsModule { }
