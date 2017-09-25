import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";
import { User } from '../_models/user';
import { Toolbox } from './-toolbox';

@Injectable()
export class UsersService {

    toolbox = new Toolbox();
    users: User[] = [];
    usersObserver = new BehaviorSubject(this.users);
    currentUser: User;
    currentUserObserver = new BehaviorSubject(this.currentUser);
    currentBikes = [];
    currentBikesObserver = new BehaviorSubject(this.currentBikes);

    constructor( private _http: Http ) { }

    retrieveAll() {
        this._http.get('/users')
        .subscribe(
              (response) => {
                    this.users = response.json();
                    this.usersObserver.next(this.users);
              },
              (err) => {
                  console.log('ERROR FROM (GET) REQUEST TO API')
              }
        )

    }
    retrieveOne(id) {
        return this.toolbox.search(this.users, '_id' , id);
    }

    // NOTE: add this get for populating the bikes []

    getBikes() {
        if(this.currentUser._id) {
            this._http.get(`/users/${this.currentUser._id}`)
            .subscribe(
                  (response) => {
                      this.currentBikes = (response.json()).bikes;
                      this.currentBikesObserver.next(this.currentBikes);
                  },
                  (err) => {
                      console.log('ERROR FROM (GET) REQUEST TO API')
                  }
            )
        } else {
            console.log('skipped due to no current logged in user...')
        }

    }
    create(user) {

        // NOTE: built my own body cause having the _id property failed backend
        // validation... :(

        var body = {};
        body['first_name'] = user.first_name;
        body['last_name'] = user.last_name;
        body['email'] = user.email;
        body['password'] = user.password;
        body['conf_pass'] = user.conf_pass;

        return this._http.post('/users', body)
        .subscribe(
              (response) => {

                    // FIXME: this is fucked... will only pass if you login not after...
                    // can I just redirect here?!

                    this.retrieveAll();
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }
    update(user, id) {

        // TODO:

        // this.retrieveAll();
    }
    destroy(id) {

        // TODO:

        // this.retrieveAll();
    }
    login (user) {

        // NOTE: this just checks the local list of users aganst login creds...
        // then sets the currentUser to be who is logged-in for future ref.

        var result = this.toolbox.search(this.users,'email',user.email);
        console.log(result); // NOTE: this is needed to make it all work?! :(
        if(result.password) {
            if( result.password == user.password ){
                this.currentUser = result;
                this.getLoggedInUser();
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    getLoggedInUser () {
        // console.log(this.currentUser);
        this.currentUserObserver.next(this.currentUser);
    }
    // logout () {
    //
    //     NOTE: it appears service is flushed after you reload the root path...
    //     so logout can be achived by just redirecting back to '/' (aka the login page)...
    //
    //     this.currentUser = undefined;
    //     this.currentUserObserver.next(this.currentUser);
    // }
    createBike(bike) {
        this._http.post(`/users/${this.currentUser._id}`, bike)
        .subscribe(
              (response) => {
                    this.retrieveAll();
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }

}
