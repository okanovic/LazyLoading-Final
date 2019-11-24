import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/Services/comments.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  title="Comments";
  allComments = [];
  constructor(private commentsService:CommentsService) { }

  async ngOnInit() {
   return await this.commentsService.getComments().subscribe(comments => this.allComments = comments, error => console.error(error))
  }

}
