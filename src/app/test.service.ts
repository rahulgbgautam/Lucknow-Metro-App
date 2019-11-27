import { Injectable } from '@angular/core';

import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url: string = 'https://randomuser.me/api/?results=10'

  constructor( private http: Http) { }

  getClosetTypeListDropDown(): any {
    const getApiUrl = this.url;
    //var headers = new Headers();  
    //headers.set('Content-Type', 'application/json');
    //let options = new RequestOptions({ headers: headers });
    return this.http.get(getApiUrl).pipe(map(res => res.json()));
  
  }
  
}
