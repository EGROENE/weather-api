# weather-api
This web app that allows users to check the current weather conditions for a particular ZIP code in the US. To display that info, I used *vanilla* JS to fetch data from an API from OpenWeather & used destructuring to display only certain data.  

Upon page load, I looped through an array of image URLs (from Unsplash) and randomly set one as the initial background image. On the homepage, the user is prompted to enter a ZIP code. If they entered an invalid one, I built in some error handling to prompt the user to enter a valid one.  

Once a valid ZIP is entered, the locality name displays, along with the aforementioned destructured data points from the API. I chose to show (in imperial & metric units, when applicable) the temperature, a brief description of the weather, humidity level, & wind speed.  

I also built in functionality to display a different background by searching for images on Unsplash by the locality name. It doesn't work perfectly, as, for example, if the user searches a ZIP code for Wyoming, MI (49509), an image of the state of Wyoming will display. If you see a picture of elk when you search for Wyoming, MI, you'll probably be scratching your head-this is the reason for that. Also, if the locality is so obscure, Unsplash may not have an image for it. Minor details....  

My purpose in making this was to simply practice my JS skills in general & in implementing & manipulating data from an API. Maybe some will find it useful too.  
