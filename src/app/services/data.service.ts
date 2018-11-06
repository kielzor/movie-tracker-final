import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public get(url, headers = {}) {
    return this.http.get(url, headers)
      .pipe(
        map(users => {
          return users;
        })
      );
  }

  public post(url, body = {}, headers = {}) {
    return this.http.post(url, body, headers)
      .pipe(
        map(res => {
          return res;
        }),
      );
  }

  public delete(url, headers = {}) {
    return this.http.delete(url, headers)
    .pipe(
      map(res => {
        return res;
      }),
    );
  }
}
