
//remove https://cors-anywhere.herokuapp.com/ from the url in the query url

//add a function to arrange the list of food trucks to the nearest one to the user. prepend style.

//add function to get location and install it into the function.


var userPosition;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  userPosition = {
  lat: position.coords.latitude,
  lon: position.coords.longitude
  }
  console.log(userPosition);
  
  userPosition.append();
  $("#map").append(userPosition);
}

getLocation();

function googleApi() {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+trucks&location=29.4241,-98.4936&radius=10000&key=AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
    var apiKey = "AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("googleApi").val();
        console.log(response);
        let map;
    
        function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: new google.maps.LatLng(userPosition[0], userPosition[1]),
        mapTypeId: "terrain",
    });
    // Loop through the results array and place a marker for each
    // set of coordinates.
    }
    const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {
        const coords = results.features[i].geometry.coordinates;
        const latLng = new google.maps.LatLng(coords[1], coords[0]);
        new google.maps.Marker({
        position: latLng,
        map: map,
        });
    }
    };  
        });
        
    }
googleApi ()




//limit to 10 results
//https://maps.googleapis.com/maps/api/place/details/output?parameters