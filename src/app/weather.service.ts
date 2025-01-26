import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://www.metaweather.com/api/location';

  constructor(private http: HttpClient) {
  }

  getCity(city: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/?query=${city}`);
  }

}
