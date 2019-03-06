import { Component, OnInit } from '@angular/core';
import {CurrentWeather} from "../interfaces/current-weather";
import {WeatherService} from "../weather/weather.service";

@Component({
  selector: 'app-current-weather',
  template:`
  //   <p>
  //     current-weather works!
  //   </p>
  // `,
  // styles:['']
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: CurrentWeather
  constructor( private weatherService: WeatherService) {
    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: 'assets/img/sunny.png',
    //   temperature: 72,
    //   description: 'sunny',
    // } as CurrentWeather
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather("Sacramento", "US").subscribe((data) => {
      return this.current = data;
    });
  }

}
