import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UserService } from '../services/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loggedInUser = {};
  userName: String;
  userPassword: String;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.user.getUser(this.userName, this.userPassword).subscribe(user => {
      if (user) {
        this.router.navigate(['/home']);
      } else {
        this.userName = '';
        this.userPassword = '';
        alert('User name or password are not valid');
      }
    });
  }

  routeToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
