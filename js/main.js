let weather = {
    // First, function to greet user & prompt user to search
    // This header should be hidden upon search
    apiKey: 'f823abc88bba5b208011945b7b58e9a5',
    getWeatherMetric: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' + city 
            + '&units=metric'
            + '&appid=' + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeatherMetric(data));
    },
    displayWeatherMetric: function(data) {
        // Extract certain info from API to display:
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        // Display city name:
        const cityNameArea = document.querySelector('#city-name');
        cityNameArea.innerHTML = 'Weather in ' + name;

        // Display temperature:
        const tempArea = document.querySelector('#temp');
        tempArea.innerHTML = temp.toFixed(0) + '°';

        // Display cloud cover:
        const cloudCoverArea = document.querySelector('#cloud-cover');
        cloudCoverArea.innerHTML = description;

        // Display cloud cover icon:
        /* const cloudCoverIconArea = document.querySelector('#cloud-cover-icon');
        cloudCoverIconArea.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'; */

        // Display humidity:
        const humidityArea = document.querySelector('#humidity');
        humidityArea.innerHTML = 'Humidity: ' + humidity + '%';

        // Display wind speed:
        const windSpeedArea = document.querySelector('#wind-speed');
        windSpeedArea.innerHTML = 'Wind Speed: ' + speed + ' km/h';
    },
    search: function () {
        document.getElementById('greeting').style.display = 'none';
        this.getWeatherMetric(document.getElementById('searchbar').value);
    }
}

// Add search functionality:
document
    .querySelector('.search-btn')
    .addEventListener('click', function() {
        weather.search();
    })
document.querySelector('#searchbar').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        console.log('hi')
        weather.search();
    }
})