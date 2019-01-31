import {Component, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterText: string;
  constructor() {
  }

  ngOnInit() {
  }

  getName($event) {
    this.filterText = $event;
  }

}
