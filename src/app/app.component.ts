import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {WeatherService} from './weather.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private weatherService: WeatherService) {
  }

  city = ''
  weatherData: any = ''
  errorMessage: string = '';
  searchWeather() {
    if (this.city) {
      this.weatherService.getCity(this.city).subscribe(res => {
        console.log(res)
        this.weatherData = res;
        this.errorMessage = '';
      })
    }
    else{
      this.errorMessage = 'City name cannot be empty!';
      return;
    }
  }
  getTimezone(offset: number): string {
    const hours = offset / 3600;
    return `UTC${hours >= 0 ? ' + ' : ''}${hours}`;
  }

}
