import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Blog } from './blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blog-post';
  posts: any;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
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
