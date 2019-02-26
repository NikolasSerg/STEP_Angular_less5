import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor() { }
  @Input() post: [{id: number, title: string, post: string}];

  ngOnInit() {
  }

}
