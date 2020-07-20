import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Parent } from 'src/app/models/parent';
import { Master } from 'src/app/models/master';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Child[];
  inputValue: string;

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.inputValue = 'aww';
    this.redditService.getRedditData(this.inputValue).subscribe((d: Master) => {
      this.posts = d.data.children;
    });
  }

  getRedditList() {
    this.redditService.getRedditData(this.inputValue).subscribe((d: Master) => {
      this.posts = d.data.children;
      console.log(this.posts);
    });
  }

}
