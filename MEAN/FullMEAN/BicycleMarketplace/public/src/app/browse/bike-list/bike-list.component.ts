import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../_services/users.service';
import { BikesService } from '../../_services/bikes.service';
import { Router } from '@angular/router';
import { User } from '../../_models/user';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

    currentUser: User;
    allBikes = [];

    constructor( private _userService: UsersService, private _bikeService: BikesService, private _redirect: Router ) {
        this._userService.currentUserObserver.subscribe(
          (data) => {
              this.currentUser = data;
          }
        )
        this._bikeService.bikesObserver.subscribe(
          (data) => {
              this.allBikes = data;
          }
        )
    }

    ngOnInit() {
        this._bikeService.retrieveAll();
    }

}
