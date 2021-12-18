import { Component, Input, OnInit } from '@angular/core';
import { Post, PostType } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post | undefined;
  Content_Type = PostType;
  constructor() { }

  ngOnInit(): void {
  }

}
