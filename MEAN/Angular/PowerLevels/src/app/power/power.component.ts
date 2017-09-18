import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})


export class PowerComponent implements OnInit {
    numbers: number[] = [];
    newPower: number = 0;
    currentPower: number = 0;
    fullImagePath = '/assets/images/goku.jpg';
  constructor() {
      this.numbers = this.makeArray(100);
    }

  ngOnInit() {
  }

  makeArray(num){
      var result = [];
      for(let i = 0; i < num; i++){
          result[i] = i+1;
      }
      return result;
  }
  onSubmit() {
      this.currentPower = this.newPower;
  }

}
