# Weather and City Photo Web App

## Overview
This is a simple web application that allows users to search for the current weather of any city and displays a representative photo of that city. It demonstrates how to connect to **public APIs** using JavaScript.

The project uses two APIs:
1. **OpenWeatherMap API** – to fetch the current weather data.
2. **Unsplash API** – to fetch a photo of the searched city.

The page dynamically changes its background according to the current weather conditions and displays additional weather information such as temperature, feels like, humidity, wind speed, and more.

---

## Features
- Search for a city by typing and pressing **Enter** or clicking the **Search** button.
- Displays:
  - City name and country
  - Current temperature, feels like, min/max temperatures
  - Humidity and wind speed
  - Weather description and icon
- Shows a photo of the city using Unsplash API.
- Dynamically changes the page background according to weather (clear, cloudy, rainy, snowy, etc.).
- Handles errors gracefully (city not found, API errors).

---

## How to Use
1. Open `index.html` in a web browser.
2. Type the name of a city in the input box.
3. Press **Enter** or click **Search**.
4. The weather data and city photo will appear below the search input.

---

## API References
- **OpenWeatherMap API Documentation**: [https://openweathermap.org/api](https://openweathermap.org/api)  
- **Unsplash API Documentation**: [https://unsplash.com/developers](https://unsplash.com/developers)

---

## Files
- `index.html` – main HTML page
- `style.css` – CSS styles for layout, backgrounds, and formatting
- `script.js` – JavaScript file that handles API calls and dynamic updates

---

## Notes
- Ensure you replace the API keys in `script.js` with your own keys.
- The `.iml` file and `.idea/` folder are not required and should **not** be included in the repository.

---

## Author
- Annie Castillo Diaz 200588586  
- COMP1073 – Client-Side JavaScript Assignment 4  
- Submission for academic evaluation
