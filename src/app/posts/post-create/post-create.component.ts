import { Component } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/_services/posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle;
  enteredContent;

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    //if the form is invalid/blank, dont actually submit it
    if (form.invalid) return;
    const post: Post = {
      id: Math.random(),
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
