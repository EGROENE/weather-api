const initBGImages = [
    'https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1535320404287-416e2c6d2b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1539448185117-e8b970a2a739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1558469212-395fb44691be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2V3aXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
]

// Function to set init background randomly:
const setInitBG = () => {
    let initBGImagesLength = initBGImages.length;
    let randomNum = Math.floor(Math.random() * initBGImagesLength);
    document.body.style.backgroundImage = 'url("' + initBGImages[randomNum] + '")';
}
setInitBG();

let weather = {
    apiKey: 'f823abc88bba5b208011945b7b58e9a5',
    getWeatherMetric: function (zipCode) {
        let apiCall = fetch(
            'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode
            + '&units=metric'
            + '&appid=' + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(err => {
            document.getElementById('not-found').style.display = 'block';
            document.getElementById('not-found').innerHTML = 'Please enter a valid ZIP code.';
        })
    },
    displayWeather: function(data) {
        document.getElementById('not-found').style.display = 'none';
        document.getElementById('loading').style.display = 'none';
        // Extract certain info from API to display:
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const tempF = (temp * 1.8) + 32;
        const { speed } = data.wind;
        const speedMiles = (speed * 0.6213712).toFixed(2);

        // Display city name:
        const cityNameArea = document.querySelector('#city-name');
        cityNameArea.innerHTML = 'Weather in ' + name;

        // Display temperature:
        const tempArea = document.querySelector('#temp');
        tempArea.innerHTML = tempF.toFixed(2) + '°F | ' + temp.toFixed(2) + '°C'

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
        windSpeedArea.innerHTML = 'Wind Speed: ' + speedMiles + ' mph | ' + speed + ' km/h'

        // Set bg image based on location:
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?' + name + '")'
    },
    search: function () {
        document.getElementById('greeting').style.display = 'none';
        document.getElementById('loading').innerHTML = 'Wait a second (or less)...';
        this.getWeatherMetric(document.getElementById('searchbar').value);
    }
}

// Search for info (call API) upon clicking of search icon and/or pressing of 'Enter' key once something is typed in search bar:
document
    .querySelector('.search-btn')
    .addEventListener('click', function() {
        weather.search();
    })
document.querySelector('#searchbar').addEventListener('keyup', function(event) {
    if (event.key == 'Enter') {
        weather.search();
    }
})