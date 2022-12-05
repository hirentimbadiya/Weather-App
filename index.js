/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
    //   const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API key

    //CODE GOES HERE
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6836a16b94mshf12ba7377526a3ap150e72jsn58903efa9aed',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    
    return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    // CODE GOES HERE
    const data = await getWeatherData(city);
    showWeatherData(data);
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    console.log(weatherData);
    //CODE GOES HERE
    document.getElementById('temp').innerText = `${weatherData.main.temp}`;
    document.getElementById('min-temp').innerText = `${weatherData.main.temp_min}`;
    document.getElementById('max-temp').innerText = `${weatherData.main.temp_max}`;
    document.getElementById('city-name').innerText = `${weatherData.name}`;
    document.getElementById('city-name').innerText = `${weatherData.name}`;
    document.getElementById('weather-type').innerText = `${weatherData.weather[0].main}`;
}

