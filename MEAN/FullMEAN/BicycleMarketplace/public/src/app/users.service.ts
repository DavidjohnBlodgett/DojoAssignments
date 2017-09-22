import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class UsersService {

  constructor(private _http: Http) {
      console.log(this._http);
   }
  retrieveAll() {
    return this._http.get(`/users`)
    .map( data => data.json() )
    .toPromise();
  }
  retrieveOne(id) {
    return this._http.get(`/users/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  create(user) {
    return this._http.post(`/users`, user)
    .map( data => data.json() )
    .toPromise();
  }
  update(user, id) {
    return this._http.put(`/users/${id}`, user)
    .map( data => data.json() )
    .toPromise();
  }
  destroy(id) {
    return this._http.delete(`/users/${id}`)
    .map( data => data.json() )
    .toPromise();
  }

}
