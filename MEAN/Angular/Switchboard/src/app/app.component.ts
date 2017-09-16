import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Switchboard';
  switches = [
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1),
    this.getRandomInt(0,1)
  ];
  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  onClick(button) {
      if(this.switches[button]) {
          this.switches[button] = 0;
      } else {
          this.switches[button] = 1;
      }
  }
}
