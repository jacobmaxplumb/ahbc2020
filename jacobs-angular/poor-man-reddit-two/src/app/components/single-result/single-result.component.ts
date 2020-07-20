import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
