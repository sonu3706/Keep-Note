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

  public http_post(baseUrl: string, restUrl: string, body: any): Observable<T> {
    return this.http.post<T>(baseUrl.concat(restUrl), body, httpOptions);
  }

  public http_get(baseUrl: string, restUrl: string): Observable<T> {
    return this.http.get<T>(baseUrl.concat(restUrl));
  }

  public http_put(baseUrl: string, restUrl: string, body: any): Observable<T> {
    return this.http.put<T>(baseUrl.concat(restUrl), body, httpOptions);
  }

  public http_delete(baseUrl: string, restUrl: string): Observable<T> {
    return this.http.delete<T>(baseUrl.concat(restUrl));
  }
}
