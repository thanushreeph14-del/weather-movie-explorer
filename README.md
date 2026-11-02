# Weather & Movie Explorer

A responsive web application that allows users to check real-time weather information for different cities and explore Studio Ghibli movies.

This project was developed as part of Minor Project 03 to demonstrate JavaScript ES6+, API integration, asynchronous programming, and dynamic DOM manipulation.

## Features

### 1. Weather App
- Search for weather information by city name.
- Display current temperature in Celsius.
- Show weather conditions, humidity, and wind speed.
- Handle invalid city names and API errors.
- Responsive user interface.

### 2. Movie Search App
- Search and filter Studio Ghibli movies by title.
- Display movie posters and descriptions.
- Show release years, directors, and ratings.
- Handle empty search results.
- Responsive movie card layout.

## Technologies Used

- HTML5
- CSS3
- JavaScript ES6+
- OpenWeatherMap API
- Studio Ghibli API
- Git and GitHub

## Project Structure

```text
Minor-Project-03/
│
├── index.html
├── style.css
│
├── weather/
│   ├── weather.html
│   └── weather.js
│
├── movies/
│   ├── movies.html
│   └── movies.js
│
└── README.md
```

## APIs Used

### OpenWeatherMap API

Used to retrieve current weather information, including temperature, weather conditions, humidity, and wind speed.

Website: https://openweathermap.org/

An API key is required.

### Studio Ghibli API

Used to retrieve Studio Ghibli movie information, including titles, posters, descriptions, directors, release years, and ratings.

API endpoint: https://ghibliapi.vercel.app/films

No API key is required.

Note: The Movie Search App is limited to Studio Ghibli films.

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Add your OpenWeatherMap API key to `weather/weather.js`.
4. Open `index.html` using the Live Server extension.
5. Select Weather App or Movie Search App from the homepage.

## Learning Outcomes

This project demonstrates:

- JavaScript arrow functions and template literals.
- Destructuring and modern JavaScript syntax.
- Fetch API and asynchronous programming using async/await.
- Promise handling and error management.
- Dynamic DOM manipulation and event handling.
- Responsive web design using CSS Grid and Flexbox.

## Author

Developed as part of Minor Project 03 – Web Development.

## License

This project is intended for educational purposes.
