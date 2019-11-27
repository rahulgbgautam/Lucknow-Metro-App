import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private url: string = 'https://randomuser.me/api/?results=5';
  constructor(private http: Http) {
  }
  getStationList() {
      const getApiUrl = this.url;
      var headers = new Headers();  // it is used for API Request and we does use this always 
      headers.set('Content-Type', 'application/json'); // 'Content-Type', 'application/json' , it is fixed and it is only used for json data 
      let options = new RequestOptions({ headers: headers });
      return this.http.get(getApiUrl, options).pipe(map(res => res.json()));  // pipe(map -> it does map data in json format 
  }
}
