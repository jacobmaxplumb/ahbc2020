import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[];
  showForm: boolean;

  constructor() { }

  ngOnInit() {
    this.showForm = false;
    this.posts = [
      {title: 'hello', thought: 'I thought the word hello'},
      {title: 'hello2', thought: 'I thought the word hello2'},
    ];
  }

  onDelete(post: Post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    const newPost: Post = {title: post.title, thought: post.thought};
    this.posts.push(newPost);
    this.showForm = false;
  }

}
