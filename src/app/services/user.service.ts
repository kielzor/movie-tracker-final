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
    console.log('add', movie)
    const { id, title, poster_path, release_date, vote_average, overview } = movie;
    const user_id = 145;
    const movie_id = id;
    vote_average = JSON.stringify(vote_average);
    // const user_id = this.currentUser.value['id'];
    // console.log(movie_id, user_id, title, poster_path, release_date, vote_average, overview)

    return super.post('http://localhost:3000/api/users/favorites/new',
      JSON.stringify({
        movie_id,
        user_id,
        title,
        poster_path,
        release_date,
        vote_average,
        overview
      }),
    //   {
    //     "movie_id": 497,
    //      "user_id": 1,
    //      "title": "The Green Mile",
    //      "poster_path": "https://image.tmdb.org/t/p/w200/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
    //      "release_date": "1999-12-10",
    //      "vote_average": "8.4",
    //      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution."
    //  },
     { 'Content-Type': 'application/json' }
      )
      .pipe(
        map(res => {
          return res;
        }),
      );
  }

  public deleteFavorite(movie): any {
    console.log('delete', movie);
  }

  public getFavorites(): any {
    // const user_id = this.currentUser.value['id'];
    const user_id = 1;

    return super.get(`http://localhost:3000/api/users/${user_id}/favorites`, {})
      .pipe(
        catchError(err => of(err)
      )
    );
  }
}
