// Weather API key
var apiKey = "391826fb0aefc3ce7776fffd2278448a";

// Variables
var city = "";
var weather = "";

// Function to get city from IP address
function getCity(){

    // URL for API to get city
    var ipApi = "http://ip-api.com/json/";

    // Call to API
    $.ajax({
        url: ipApi,
        method: "GET"
    }).then(function(response){
        console.log(response.city);
        city = response.city;
        getCurrentWeather(city);
    })
}

// Function to get weather
function getCurrentWeather(city){
    
    // URL to get current weather from API
    var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    // Call to API
    $.ajax({
        url: currentURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.weather[0].main);
        weather = response.weather[0].main;
    })
}

// Function call
getCity();
