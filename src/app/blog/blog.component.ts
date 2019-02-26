import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
  }

  // @ts-ignore
  arrBlog: [{id: number, title: string, post: string}] = [{
    id: 1,
    title: 'Lorem',
    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur cupiditate harum, molestiae tempore totam.'
  },
    {
      id: 2,
      title: 'Lorem2',
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur cupiditate harum, molestiae tempore totam.'
    }];

  ngOnInit() {
  }

}
