// Variables to get div IDs
var conditionGreen = $("#conditionGreen");
var conditionYellow = $("#conditionYellow");
var conditionRed = $("#conditionRed");

// Weather API key
var apiKey = "391826fb0aefc3ce7776fffd2278448a";

// Variables
var city = "";
var weather = "";

// Function to get city from IP address
function getCity(){

    // URL for API to get city
    var ipApi = "https://freegeoip.app/json/";

    // Call to API
    $.ajax({
        url: ipApi,
        method: "GET"
    }).then(function(response){
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
        weather = response.weather[0].main;
        if(weather == "Clear"){
            conditionGreen.removeClass("is-hidden");
        } else if(weather == "Rain"){
            conditionYellow.removeClass("is-hidden");
        } else{
            conditionRed.removeClass("is-hidden");
        }
    })
}

// Function call
getCity();

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