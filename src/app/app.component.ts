import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';

  constructor(private weatherService: WeatherService) { }

  city = ''
  woeid = ''
  searchWeather () {
    this.weatherService.getCity(this.city).subscribe(location => {
      if (location && location.length > 0) {
        this.woeid = location[0].woeid;

        console.log(this.woeid);
      }
    })
  }


}
