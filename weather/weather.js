
const API_KEY = "29271fc7b2464f206c04426d5c30cba1";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const message = document.getElementById("message");
const weatherResult = document.getElementById("weatherResult");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        message.textContent = "Please enter a city name.";
        weatherResult.hidden = true;
        return;
    }

    message.textContent = "Loading weather...";
    weatherResult.hidden = true;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found or API request failed.");
        }

        const data = await response.json();

        const {
            name,
            main,
            weather,
            wind
        } = data;

        document.getElementById("cityName").textContent = name;
        document.getElementById("temperature").textContent =
            Math.round(main.temp);

        document.getElementById("weatherCondition").textContent =
            weather[0].description;

        document.getElementById("humidity").textContent =
            `${main.humidity}%`;

        document.getElementById("windSpeed").textContent =
            `${wind.speed} m/s`;

        weatherResult.hidden = false;
        message.textContent = "";

    } catch (error) {
        message.textContent =
            "Unable to find weather. Check the city name or try again later.";

        console.error(error);
    }
});
