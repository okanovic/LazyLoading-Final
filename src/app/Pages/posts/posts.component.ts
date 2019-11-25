import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title="Posts"
  allPosts = [];
  constructor(private postsService:PostsService) { }

  async ngOnInit() {
    this.allPosts = this.postsService.getPosts()
  }

}
