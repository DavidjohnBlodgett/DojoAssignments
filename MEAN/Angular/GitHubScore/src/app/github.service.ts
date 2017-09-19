import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {


  constructor(private _http: Http) { }

  retrieveUser(username, callback) {
      var url = 'https://api.github.com/users/' + username;
      this._http.get(url).subscribe(
              (response) => {
    	           // response from HTTP request
                   callback(response.json())
              },
              (err) => {
    	          // error object on failed/timed out HTTP request
                  console.log('YOU BROKE THE INTERWEBS... API CALL RETURNED ERROR!!! DID YOU EXCEED LIMIT?!')
              }
      )
   }

}
