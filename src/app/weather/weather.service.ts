import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {CurrentWeather} from '../interfaces/current-weather';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface CurrentWeatherData {
  weather: [{description: string, icon: string }];
  main: {temp: number};
  sys: { country: string };
  dt: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(city: string, country: string): Observable<CurrentWeather> {
    return this.httpClient
      .get<CurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
          `q=${city},${country}&appid=${environment.appid}`
      )
      .pipe(map(data => this.transformToCurrentWeather(data)));
  }

  private transformToCurrentWeather(data: CurrentWeatherData): CurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    };
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }
}
