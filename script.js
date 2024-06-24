async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '5c5152027b4d0624f9d678aebc6916b9' ;  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}