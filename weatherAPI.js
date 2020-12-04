// Variables to get div IDs
var conditionGreen = $("#conditionGreen");
var conditionYellow = $("#conditionYellow");
var conditionRed = $("#conditionRed");

// Weather API key
var apiKey = "391826fb0aefc3ce7776fffd2278448a";

// Variables
var city = "";
var lat = 0;
var lon = 0;
var weather = "";
var userPosition;

// Function to get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
function showPosition(position) {
    userPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    lat = userPosition.lat;
    lon = userPosition.lon;
    getCurrentWeather(lat, lon);  
}

// Function call
getLocation();

// Function to get weather
function getCurrentWeather(lat, lon){
    
    // URL to get current weather from API
    var currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    // Call to API
    $.ajax({
        url: currentURL,
        method: "GET"
    }).then(function (response) {
        weather = response.weather[0].main;
        if(weather == "Clear" || weather == "Clouds"){
            conditionGreen.removeClass("is-hidden");
        } else if(weather == "Rain" || weather == "Drizzle"){
            conditionYellow.removeClass("is-hidden");
        } else{
            conditionRed.removeClass("is-hidden");
        }
    })
}

// Add functionality to modal button
$("#launchGreen").click(function() {
    $(".modalGreen").addClass("is-active");
  });
$("#launchYellow").click(function() {
    $(".modalYellow").addClass("is-active");
  });
$("#launchRed").click(function() {
    $(".modalRed").addClass("is-active");
  });
// Add functionality to close buttons
$(".close").click(function() {
    $(".modal").removeClass("is-active");
});