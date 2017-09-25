import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { BikesService } from '../_services/bikes.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Bike } from '../_models/bike';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

    currentUser: User;
    bikeForm: Bike = new Bike();
    userBikes = [];

    constructor( private _userService: UsersService, private _bikeService: BikesService, private _redirect: Router ) {
        this._userService.currentUserObserver.subscribe(
          (data) => {
              this.currentUser = data;
          }
        )
        this._userService.currentBikesObserver.subscribe(
          (data) => {
              this.userBikes = data;
          }
        )
    }

    ngOnInit() {
        this._userService.getLoggedInUser();
        if(!this.currentUser) {
            console.log('User not logged in redirect to login');
            this._redirect.navigate(['']);
        }
        this.getBikes();
    }

    onCreate() {
        // this._bikeService.create(this.bikeForm); // NO make it with user...
        this._userService.createBike(this.bikeForm);
    }
    getBikes() {
        this._userService.getBikes();
    }

}
