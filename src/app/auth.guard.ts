import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  currentUser = {};

  constructor (private router: Router, private user: UserService) {
    this.user.getCurrentUser.subscribe(u => {
      this.currentUser = u;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.currentUser['name']) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
