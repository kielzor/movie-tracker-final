import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public get(url, headers = {}): any {
    return this.http.get(url, headers)
      .pipe(
        map(users => {
          return users;
        })
      );
  }

  public post(url, body = {}, headers = {}): any {
    return this.http.post(url, body, headers)
      .pipe(
        map(res => {
          console.log('response', res);
          return res;
        }),
        catchError(err => console.log('Invalid Entry'))
      );
  }

  public delete(url, body = {}, headers = {}): any {
    return this.http.delete(url, body)
    .pipe(
      map(res => {
        console.log('delete response', res);
        return res;
      }),
      catchError(err => console.log('Unable to delete favorite', err))
    );
  }
}
