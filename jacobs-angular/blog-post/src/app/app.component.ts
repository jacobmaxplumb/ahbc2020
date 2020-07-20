import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';
import { RedditService } from './reddit.service';
import { SiglePostParent } from './sigle-post-parent';
import { SinglePost } from './single-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-post';
  posts: any;

  constructor(private blogService: BlogService, private redditSerive: RedditService) {}

  ngOnInit() {
    this.redditSerive.getRedditPosts().subscribe(data => {
      console.log(data.data);
    })
    this.blogService.getBlogPosts().subscribe((data: Blog) => {
      console.log(data.title);
      console.log(data.language);
      console.log(data.posts.length);
      console.log(data.posts[0].title);

      data.posts.forEach(x => {
        console.log(x.title);
        x.tags.forEach(y => {
          console.log(y);
        });
      });
    });
  }
}
