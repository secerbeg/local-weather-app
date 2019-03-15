import { Component, OnInit } from '@angular/core';
import {CurrentWeather} from "../interfaces/current-weather";
import {WeatherService} from "../weather/weather.service";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: CurrentWeather
  constructor( private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getCurrentWeather('Sacramento', 'US').subscribe((data) => {
      return this.current = data;
    });
  }

}
