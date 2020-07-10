import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[];
  postNew: boolean;

  constructor() { }

  ngOnInit() {
    this.postNew = false;
    this.posts = [];
  }

  submitModalInfo(post: any) {
    console.log(post);
    this.posts.push({title: post.title, thought: post.thought});
    this.postNew = false;
  }

  removePost(post: Post): void {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }

}
