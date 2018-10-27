import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class UserService extends DataService {
  currentUser = new BehaviorSubject({});
  getCurrentUser = this.currentUser.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  public getUser(name, password): any {
    return super.get('http://localhost:3000/api/users/', {})
      .pipe(
        catchError(err => of(err)
        )
      );
  }

  public addUser(name, email, password): any {
    return super.post('http://localhost:3000/api/users/new',
      { name, email, password }, {})
      .pipe(
        map(res => {
          return res;
        }),
      );
  }

  public addFavorite(movie): void {
    console.log(movie);
  }

  public getFavorites(): void {
  }
}
