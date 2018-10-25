import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  currentUser = new BehaviorSubject({});
  getCurrentUser = this.currentUser.asObservable();

  constructor(private http: HttpClient) { }

  public getUser(name, password): any {
    return this.http.get('http://localhost:3000/api/users/', {})
      .pipe(
        map(users => {
          const currentUser = users['data'].find(user => {
            return (user.name === name && user.password === password);
          });
          if (currentUser) {
            this.currentUser.next(currentUser);
            return true;
          }
        })
      );
  }

  public addUser(name, email, password): any {
    return this.http.post('http://localhost:3000/api/users/new',
      { name, email, password })
      .pipe(
        map(res => {
          return res;
        }),
        catchError(err => alert('Invalid Entry'))
      );
  }
}
