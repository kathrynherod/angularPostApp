import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from 'src/app/_services/posts.service';
import { Post } from '../post.model';

import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle;
  enteredContent;

  public post: Post;

  private mode = 'create';
  private postId: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.post = this.postsService.getPostId(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    //if the form is invalid/blank, dont actually submit it
    if (form.invalid) return;

    this.mode === 'create'
      ? this.postsService.addPost(form.value.title, form.value.content)
      : this.postsService.updatePost(
          this.postId,
          form.value.title,
          form.value.content
        );

    form.resetForm();
  }
}
