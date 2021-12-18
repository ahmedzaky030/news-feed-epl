import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);
  constructor(private postService: PostService) { }

  ngOnInit(): void {
   this.posts$ = this.postService.getPosts();
  }

}
