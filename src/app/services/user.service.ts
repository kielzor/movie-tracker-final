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

  public addFavorite(movie): any {
    const { id, title, poster_path, release_date, vote_average, overview } = movie;
    const movie_id = id;
    const user_id = this.currentUser.value['id'];

    return super.post('http://localhost:3000/api/users/favorites/new', {
        movie_id,
        user_id,
        title,
        poster_path,
        release_date,
        vote_average,
        overview
    })
      .subscribe(res => {
        return res;
      }),
      catchError(err => of(err)
      );
  }

  public deleteFavorite(movie): any {
    const user_id = this.currentUser.value['id'];
    const movie_id = movie.movie_id;

    return super.delete(`http://localhost:3000/api/users/${user_id}/favorites/${movie_id}`, {})
      .subscribe(res => {
        return res;
      }),
      catchError(err => of(err)
      );
  }

  public getFavorites(): any {
    const user_id = this.currentUser.value['id'];

    return super.get(`http://localhost:3000/api/users/${user_id}/favorites`, {})
      .pipe(
        catchError(err => of(err)
      )
    );
  }
}
