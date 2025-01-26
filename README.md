# **Weather App Documentation**

## **Overview**
The Weather App is a simple Angular application that allows users to search for current weather conditions by city. It uses the OpenWeatherMap API to fetch real-time weather data, such as temperature, wind speed, humidity, and more.

---

## **Features**
1. Search weather by city name.
2. Display the following weather details:
  - Country
  - City name
  - Weather description (e.g., "Broken Clouds")
  - Wind speed and direction
  - Coordinates (longitude and latitude)
  - Temperature (current, max, min)
  - Feels like temperature
  - Humidity
  - Pressure
  - Timezone
  - Sunrise and sunset times
3. User-friendly UI with a responsive design.
4. Data formatted in metric units (°C and km/h).
5. Capitalized weather descriptions.

---

## **Technologies Used**
- **Frontend**: Angular 16+
- **Styling**: CSS
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Languages**: TypeScript, HTML, CSS

---

## **Prerequisites**
- Node.js installed on your system (v14+).
- Angular CLI installed globally (`npm install -g @angular/cli`).
- An OpenWeatherMap API key.

---

## **Installation**

### 1. Clone the Repository
```bash
git clone <repository_url>
cd weather-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure the OpenWeatherMap API Key
- Open `weather.service.ts` in the `src/app` folder.
- Replace `YOUR_API_KEY` with your OpenWeatherMap API key:
  ```typescript
  private API_KEY = 'YOUR_API_KEY';
  ```

### 4. Run the Application
```bash
ng serve
```
- Open the app in your browser: [http://localhost:4200](http://localhost:4200).

---

## **File Structure**
```
src/
├── app/
│   ├── app.component.ts         # Main component logic
│   ├── app.component.html       # Main component template
│   ├── app.component.css        # Main component styles
│   ├── weather.service.ts       # Service for fetching weather data
│   ├── app.module.ts            # Main module
├── assets/                      # Static assets
├── environments/                # Environment configuration
```

---

## **How It Works**

1. **User Input**: The user enters a city name in the search bar and clicks "Get Weather."
2. **API Request**: The app sends an HTTP request to the OpenWeatherMap API to fetch weather data for the specified city.
3. **Data Display**: The API response is processed, and the weather data is displayed in a card format.
4. **Error Handling**: If the city is not found or there’s a network error, the app displays an appropriate error message.

---

## **API Integration**

The app integrates with the OpenWeatherMap API using the `HttpClient` module in Angular.

### Example API Call:
```
https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric
```

- **Query Parameters**:
  - `q`: City name (e.g., `London`).
  - `appid`: Your API key.
  - `units`: Metric system (`metric` for Celsius).

---

## **Key Components**

### 1. **WeatherService (`weather.service.ts`)**
Responsible for making HTTP requests to the OpenWeatherMap API and returning the response.

```typescript
getCity(city: string): Observable<any> {
  return this.http.get<any>(
    `${this.baseUrl}/weather?q=${city}&appid=${this.API_KEY}&units=metric`
  );
}
```

### 2. **AppComponent (`app.component.ts`)**
Handles user input, triggers API calls, and processes the API response.

---

## **Error Handling**

- Displays an error message when:
  - The user enters an invalid city name.
  - The OpenWeatherMap API is unreachable.
  - The API key is invalid or not configured.

---

## **Customizations**

1. **Change Units**:
  - To use Fahrenheit, replace `units=metric` with `units=imperial` in `weather.service.ts`.

2. **Add More Data**:
  - The OpenWeatherMap API provides additional fields (e.g., UV index, hourly forecast). Update the template to include these fields.

3. **Improve UI**:
  - Use a CSS framework like Bootstrap or Material Design for more polished styling.

---

## **Future Improvements**

1. Add hourly and daily weather forecasts.
2. Implement geolocation to fetch the user's current weather.
3. Use a chart library (e.g., Chart.js) to display temperature trends.
4. Add a dark mode toggle for better user experience.

---

## **FAQ**

### 1. Why am I getting a 401 Unauthorized error?
- Ensure your API key is correctly configured in `weather.service.ts`.
- Verify that your API key is active in the OpenWeatherMap dashboard.

### 2. Why is the timezone or sunrise/sunset time incorrect?
- Double-check the `timezone` field in the API response and ensure it's being applied correctly in the calculation.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

