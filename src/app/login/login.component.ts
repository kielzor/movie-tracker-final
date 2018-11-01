import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
    this.user.getUser().subscribe(users => {
      const currentUser = users['data'].find(user => {
        return (user.name === this.userName && user.password === this.userPassword);
      });

      if (currentUser) {
        this.user.currentUser.next(currentUser);
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
