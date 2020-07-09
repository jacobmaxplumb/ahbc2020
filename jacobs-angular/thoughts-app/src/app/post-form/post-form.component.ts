import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  @Output() closeForm = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.post = {title: '', thought: ''};
  }

  submitPost() {
    this.closeForm.emit(this.post);
  }

}
