import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';
import { Post } from 'src/app/models/post';
import { Main } from 'src/app/models/main';
import { Child } from 'src/app/models/child';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  children: Child[];

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getPosts().subscribe((response: Main) => {
      this.children = response.data.children;
    });
  }

}
