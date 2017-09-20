import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  constructor(private _weather: WeatherService) {

      this._weather.getWeather('Seattle', (result)=>{
          this.weather = result;
      });

  }

  ngOnInit() {
  }

}
