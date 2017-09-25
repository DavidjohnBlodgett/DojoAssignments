import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UsersService } from '../_services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    users = [];
    // currentUser: User;
    userReg = new User();
    userLogin = new User();

    constructor(private _userService: UsersService, private _redirect: Router) {
        // TODO: maybe on construction call a function that would get random bike...?
        // then feed it to a "bike component"?

        // TODO: call function that checks if user is logged in! redirect if they are...
        this._userService.usersObserver.subscribe(
            (data) => {
                this.users = data;
            }
        )
        // this._userService.currentUserObserver.subscribe(
        //   (data) => {
        //       this.currentUser = data;
        //   }
        // )
    }
    ngOnInit() {
        this._userService.retrieveAll();

        // this._userService.getLoggedInUser();

        // if(this.currentUser) {
        //     console.log('User already logged in redirect to browse');
        //     this._redirect.navigate(['browse']);
        // }

    }
    onSubmitLogin() {
        if(this._userService.login(this.userLogin)) {
            console.log('User now logged in redirect to browse');
            this.userLogin = new User();
            this._redirect.navigate(['browse']);
        } else {
            console.log('User not logged in redirect to /');
            this._redirect.navigate(['']);
        }
    }
    onSubmitReg() {
        if(this._userService.create(this.userReg)) {
            if(this._userService.login(this.userReg)) {
                console.log('User now logged in redirect to browse');
                this.userReg = new User();
                this._redirect.navigate(['browse']);
            } else {
                console.log('User not logged in redirect to /');
                this._redirect.navigate(['']);
            }
        } else {
            this._redirect.navigate(['']);
        }
    }
    // onSubmitReg() {
    //     if(this._userService.create(this.userReg)) {
    //         this.userReg = new User();
    //         this._redirect.navigate(['browse']);
    //     } else {
    //         this._redirect.navigate(['']);
    //     }
    // }
}
