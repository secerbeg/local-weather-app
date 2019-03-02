import { Component, OnInit } from '@angular/core';
import {CurrentWeather} from "../interfaces/current-weather";

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
  constructor() {
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.png',
      temperature: 72,
      description: 'sunny',
    } as CurrentWeather
  }

  ngOnInit() {
  }

}
