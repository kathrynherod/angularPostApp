import { HttpClient } from '@angular/common/http';
import { Post } from '../posts/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const url = 'http://localhost:3000/api/posts/';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    this.httpClient
      .get<{ message: string; posts: any }>(url)
      .pipe(
        map(postData =>
          postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id
            };
          })
        )
      )
      .subscribe(transformedPosts => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
    // return [...this.posts];
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPostId(id: string) {
    return { ...this.posts.find(p => p.id === id) };
  }
  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.httpClient
      .post<{ message: string; postId: string }>(url, post)
      .subscribe(responseData => {
        const id = responseData.postId;
        post.id = id;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
  updatePost(id: string, title: string, content: string) {
    const post: Post = { id: id, title: title, content: content };
    this.httpClient.put(`${url}${id}`, post).subscribe(response => {});
  }
  deletePost(postId: string) {
    this.httpClient.delete(`${url}${postId}`).subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}
