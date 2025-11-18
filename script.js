    // Trigger search when pressing Enter
    document.getElementById('cityInput').addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
    document.getElementById('getWeatherBtn').click();
}
});

    // Main button event
    document.getElementById('getWeatherBtn').addEventListener('click', function () {

    const city = document.getElementById('cityInput').value;
    const apiKey = 'fd14246c8cb2ff30e71f7c5c329dd07b';  // OpenWeatherMap API key
    const unsplashKey = 'X_RH_DiIzQKWsxxbVa5u0km5ihkahi759L1nAIuOg-Y'; // Unsplash API key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather information
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);

    const resultDiv = document.getElementById('weatherResult');
    const photoDiv = document.getElementById('cityPhoto');

    if (data.cod === 200) {

    // ---------- CHANGE PAGE BACKGROUND ACCORDING TO WEATHER ----------
    const weatherMain = data.weather[0].main.toLowerCase();
    document.body.className = ""; // Reset classes

    if (weatherMain.includes("clear")) {
    document.body.classList.add("sunny");
} else if (weatherMain.includes("cloud")) {
    document.body.classList.add("cloudy");
} else if (weatherMain.includes("rain") || weatherMain.includes("drizzle")) {
    document.body.classList.add("rainy");
} else if (weatherMain.includes("snow")) {
    document.body.classList.add("snowy");
} else {
    document.body.classList.add("default-bg");
}

    // ---------- DISPLAY WEATHER + ICON + EXTRA INFO ----------
    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>

      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
           alt="${data.weather[0].description}">
           <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
           <p><strong>Feels like:</strong> ${data.main.feels_like}°C</p>
           <p><strong>Min:</strong> ${data.main.temp_min}°C | <strong>Max:</strong> ${data.main.temp_max}°C</p>
           <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
           <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
           <p><strong>Condition:</strong> ${data.weather[0].description}</p>
           `;

    // ---------- FETCH CITY PHOTO FROM UNSPLASH ----------
    const photoUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashKey}`;

    fetch(photoUrl)
    .then(response => response.json())
    .then(photoData => {
    if (photoData.results.length > 0) {
    const imgUrl = photoData.results[0].urls.regular;

    photoDiv.innerHTML = `
      <img src="${imgUrl}" 
           alt="City photo"
           style="max-width: 80%; margin-top: 20px; border-radius: 10px;">
           `;
} else {
    photoDiv.innerHTML = "<p>No city photo found.</p>";
}
});

} else {
    // City not found
    resultDiv.innerHTML = `<p>City not found. Try again.</p>`;
    photoDiv.innerHTML = "";
    document.body.className = "";
}
})
    .catch(error => {
    console.error('Error:', error);
    document.getElementById('weatherResult').innerHTML = '<p>Something went wrong.</p>';
});
});
