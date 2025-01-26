import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/';
  private API_KEY = ''
  constructor(private http: HttpClient) {
  }

  getCity(city: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/weather?q=${city}&appid=YOUR_API_KEY`);
  }

}
