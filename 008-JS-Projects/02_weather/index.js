document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = ""; //env variables

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;        

        // It may throw an error
        // Server/Database is always in other continent

        try {
            const weatherData = await fetchWeatherData(city);
            descriptionDisplay(weatherData);
        } catch (error) {
            showError();
        }
    })

    async function fetchWeatherData(city) {
        // gets the weather data
        const url = ``;

        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);

        if (!response.ok) {
            throw new Error("City Not found!");
        }

        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        // display the weather data
        console.log(data);
        const { name, main, weather } = data;

        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature : ${main.temp}`;
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

        // unlock the display
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})
