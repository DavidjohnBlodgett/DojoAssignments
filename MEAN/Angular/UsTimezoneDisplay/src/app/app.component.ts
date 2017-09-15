import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  clicked = 0;

  // TODO: this timezone stuff is still not working as expected...
  today = new Date;
  localTime = this.today.getTime();
  // timeZoneOffset = this.today.getTimezoneOffset() * 60000;
  timeZoneOffset = this.today.getTimezoneOffset()
  utc = this.localTime + this.timeZoneOffset;
  output = '';


  // output;

  onClick(val) {
      this.clicked = val;
      if(val > 0){
          // set time...
          let result = new Date(this.utc + (3600000*val));
          this.output = result.toLocaleString();
      }
      else {
          // unset time...
      }

  }

}
