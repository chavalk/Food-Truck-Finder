

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
        lon: position.coords.longitude,
    }
    console.log(userPosition);
    googleApi()  
}

getLocation();

function searchResults(map) {
    for (var i = 0; i < 10; i++) {
        $("#resultName-"+i).text(map[i].name);
        $("#categoryDisplay-"+i).text(map[i].types[0]);
        //$("#resultPic-"+i).append(map[i].photos[0].html_attributions[0]);
        console.log(map[i].name);
        //console.log(map[i].photos[0].html_attributions[0]);
    }
    
}

function googleApi() {
    //remove https://cors-anywhere.herokuapp.com/ from the url in the query url
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+trucks&location="+userPosition.lat+","+userPosition.lon+"&radius=10000&key=AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
    var apiKey = "AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
    
    //api call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $("googleApi").val();
        console.log(response);
        let map;
        searchResults(response.results);
    });
}




//limit to 10 results