import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUserName: String;
  newUserEmail: String;
  newUserPassword: String;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }

  handleSignup(): void {
    this.user.addUser(this.newUserName, this.newUserEmail, this.newUserPassword).subscribe(user => {
      if (user) {
        this.router.navigate(['/login']);
      }
    });
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }
}
