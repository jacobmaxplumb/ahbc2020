import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-api-app';

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogInfo().subscribe(
      data => this.onSuccess(data),
      error => this.onError(error)
      );
  }

  onSuccess(data: any): void {
    console.log('successful');
    console.log(data);
  }

  onError(error: any): void {
    console.log('error happened');
    console.log(error);
  }
}
