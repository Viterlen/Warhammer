import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Data} from '@angular/router';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  constructor(private service: DataServiceService) { }

  ngOnInit() {

  }
  onSubmit() {
    this.service.savePost(this.profileForm.value).subscribe(() => {
      console.log('Post saved!');
    });
  }

}
