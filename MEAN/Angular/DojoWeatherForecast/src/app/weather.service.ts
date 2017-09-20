import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
const KEY = 'b4373ac7a0b70e103f375a9d2a201372';

@Injectable()
export class WeatherService {

    currentWeather: any;

    constructor(private _http: Http) { }

    getWeather(location, callback): any{
        // var url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${KEY}'
        // api.openweathermap.org/data/2.5/weather?q=London

        var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${KEY}`
        this._http.get(url).subscribe(
            (response) => {
	               // response from HTTP request
                callback(response.json());
            },
            (err) => {
	               // error object on failed/timed out HTTP request
                   console.log('REQUEST TIMEOUT OR API CALL LIMIT REACHED...');
            }
        )
    }
}
