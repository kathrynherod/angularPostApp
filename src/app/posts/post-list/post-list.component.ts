import { PostsService } from './../../_services/posts.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'first post', content: 'first post content' },
  //   { title: 'second post', content: 'second post content' },
  //   { title: 'third post', content: 'third post content' },
  //   { title: 'fourth post', content: 'fourth post content' }
  // ];
  @Input() posts: Post[] = [];
  constructor(public postsService: PostsService) {}
}
