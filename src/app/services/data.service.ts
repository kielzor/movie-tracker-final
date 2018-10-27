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
          return res;
        }),
        catchError(err => alert('Invalid Entry'))
      );
  }
}
