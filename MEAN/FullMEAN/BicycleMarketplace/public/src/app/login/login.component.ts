import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor() {
      // TODO: maybe on construction call a function that would get random bike...?
      // then feed it to a "bike component"?

      // TODO: call function that checks if user is logged in! redirect if they are...
  }

  ngOnInit() {

  }

  onSubmitLogin() {
      // TODO: REDIRECT TO /BROWSE ON SUCCESS
  }

  onSubmitReg() {
      // TODO: CREATE & LOGIN
      console.log('onSubmitReg() triggered...')
  }
}
