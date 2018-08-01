import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle;
  enteredContent;
  @Output() postAdded = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    //if the form is invalid/blank, dont actually submit it
    if (form.invalid) return;
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postAdded.emit(post);
  }
}
