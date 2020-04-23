import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
/*
* Responsible in making HTTP request
* */
export class RestService<T> {
  constructor(private http: HttpClient) {
  }

  public http_post(baseUrl: string, restUrl: string, body: any): Observable<any> {
    return this.http.post(baseUrl.concat(restUrl), body, httpOptions);
  }

  public http_get(baseUrl: string, restUrl: string): Observable<T> {
    return null;
  }

  public http_put(baseUrl: string, restUrl: string): Observable<T> {
    return null;
  }

  public http_delete(baseUrl: string, restUrl: string): Observable<T> {
    return null;
  }
}
