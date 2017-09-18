import { Component } from '@angular/core';
import { User } from './user';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent {
    user = new User();
    users = [];

    title = 'Registration';
    success = false;
      onSubmit() {
          this.users.push(this.user);
          this.user = new User();

          console.log('form submitted');
          console.log(this.users);
          this.success = true;
      }
}
