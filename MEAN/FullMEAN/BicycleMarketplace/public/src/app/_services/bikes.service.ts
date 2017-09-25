import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";
import { Bike } from '../_models/bike';
import { Toolbox } from './-toolbox';

@Injectable()
export class BikesService {

    toolbox = new Toolbox();
    bikes: Bike[] = [];
    bikesObserver = new BehaviorSubject(this.bikes);

    constructor( private _http: Http ) { }

    retrieveAll() {
        this._http.get('/bikes')
        .subscribe(
              (response) => {
                    this.bikes = response.json();
                    this.bikesObserver.next(this.bikes)

              },
              (err) => {
                  console.log('ERROR FROM (GET) REQUEST TO API')
              }
        )

    }
    retrieveOne(id) {
        return this.toolbox.search(this.bikes, '_id' , id);
    }
    create(bike) {
        return this._http.post('/bikes', bike)
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
    update(bike, id) {

        // TODO:

        // this.retrieveAll();
    }
    destroy(id) {

        // TODO:
        
        // this.retrieveAll();
    }
}
