import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { key } from '../../api-keys';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  public getMovies(type): any {
    return this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1/`, {})
      .pipe(
        map(movie => {
          return movie.results;
        })
      );
  }
}
