import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { key } from '../../api-keys';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  currentMovies = new BehaviorSubject([]);
  getCurrentMovies = this.currentMovies.asObservable();

  constructor(private http: HttpClient) { }

  public getMovies(type): void {
    this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1/`, {})
      .subscribe(
        movie => {
          this.currentMovies.next(movie['results']);
        }
      );
  }
}
