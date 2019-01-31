import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';
import {Post} from '../../classes/post';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  article: Post;
  route: ActivatedRoute;
  router: Router;
  postService: DataServiceService;
  constructor(postService: DataServiceService, router: Router, route: ActivatedRoute) {
    this.postService = postService;
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.postService.getOne(this.route.snapshot.paramMap.get('id')).subscribe(val => {
      this.article = val;
    });
  }

}

