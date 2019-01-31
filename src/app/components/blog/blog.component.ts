import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';
import {Router} from '@angular/router';
import {Post} from '../../classes/post';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Output('getArticles') getArticles = new EventEmitter<object>();
  public title: string;
  @Input('filterText') filterText: string;
  articles$: Post[];
  router: Router;
  postService: DataServiceService;

  constructor(router: Router, postService: DataServiceService) {
    this.router = router;
    this.postService = postService;
  }

  ngOnInit() {
    this.postService.getAll().subscribe(res => {
      this.articles$ = res;
    });
    this.getArticles.emit(this.articles$);
  }

}
