import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { key } from '../../api-keys';
import { catchError } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})

export class MoviesService extends DataService {
  currentMovies = new BehaviorSubject([]);
  getCurrentMovies = this.currentMovies.asObservable();

  constructor(http: HttpClient) {
    super(http);
  }

  public getMovies(type): any {
    return super.get(`https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1/`, {})
      .pipe(
        catchError(err => of(err))
      );
  }
}
