import {Observable} from 'rxjs';
import  {CurrentWeather} from '../interfaces/current-weather';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

interface CurrentWeatherData {

  weather:
    [{
    description: string,
    icon: string
  }];
  main: {temp: number};
  sys: {country: string
  };
  dt: number;
  name: string;

}



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string) {
    return this.httpClient.get<CurrentWeatherData>
    (`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` + `q=${city},${country}&appid=${environment.appId}`);
  }
}
