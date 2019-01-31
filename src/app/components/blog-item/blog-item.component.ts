import {Component, Input, OnInit} from '@angular/core';
import {Data} from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';
import {Post} from '../../classes/post';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
  @Input()article:Post;
  postService: DataServiceService;
  constructor(postService: DataServiceService) {
    this.postService = postService;
  }

  ngOnInit() {
  }

}
