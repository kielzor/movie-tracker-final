import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(): any {
    return this.http.get('http://localhost:3000/api/users/', {})
      .pipe(
        map(user => {
          return user['data'][0];
        })
      );
  }
}
