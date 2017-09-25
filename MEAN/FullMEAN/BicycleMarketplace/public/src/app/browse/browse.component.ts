import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

    currentUser: User;

    constructor( private _userService: UsersService, private _redirect: Router ) {
        this._userService.currentUserObserver.subscribe(
          (data) => {
              this.currentUser = data;
          }
        )
    }

    ngOnInit() {
        this._userService.getLoggedInUser();
        if(!this.currentUser) {
            console.log('User not logged in redirect to login');
            this._redirect.navigate(['']);
        }
    }

}
