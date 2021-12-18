import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ PostsComponent ]
})
export class PagesModule { }
