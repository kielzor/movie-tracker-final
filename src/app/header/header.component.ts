import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = 'MOVIE TRACKER';
  name: string;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getCurrentUser.subscribe(user => {
      this.name = user['name'];
    });
  }

}

