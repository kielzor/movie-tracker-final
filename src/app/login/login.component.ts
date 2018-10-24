import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  login: string;
  // whatever = 'Zane sucks';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goElsewhere() {
    this.router.navigate(['/home']);
  }
}
