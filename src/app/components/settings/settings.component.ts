import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  user = {
    id: this.authService.currentUser.id,
    password: '',
  };

  update() {
    this.authService.createOrUpdate(this.user.id).subscribe((result) => {
      return result;
    });
  }
  ngOnInit() {
  }

}
