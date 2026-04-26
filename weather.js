const weatherBtn = document.getElementById("weatherBtn");
const weatherResult = document.getElementById("weatherResult");

weatherBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "a633982a8f55f9503dd13c5a9cfa2333";

    weatherResult.innerHTML = "<p>Loading weather...</p>";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weatherResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } 
    catch (error) {
        weatherResult.innerHTML = "<p>City not found.</p>";
    }
}