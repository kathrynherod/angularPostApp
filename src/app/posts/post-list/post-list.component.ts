import { PostsService } from './../../_services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   { title: 'first post', content: 'first post content' },
  //   { title: 'second post', content: 'second post content' },
  //   { title: 'third post', content: 'third post content' },
  //   { title: 'fourth post', content: 'fourth post content' }
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;
  constructor(public postsService: PostsService) {}

  ngOnInit() {
    console.log('post list ngoninit  running');
    this.postsService.getPosts();
    this.postsSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
