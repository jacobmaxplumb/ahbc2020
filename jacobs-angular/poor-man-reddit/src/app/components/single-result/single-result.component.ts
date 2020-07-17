import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {

  @Input() child: Child;
  post: Post;

  constructor() { }

  ngOnInit() {
    this.post = this.child.data;
    this.post.permalink = `https://www.reddit.com${this.post.permalink}`;
  }

}
