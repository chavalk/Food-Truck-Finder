

//add a function to arrange the list of food trucks to the nearest one to the user. prepend style.



//add function to get location and install it into the function.
var apiKey = "AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
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
        if (map[i].photos?.[0].html_attributions[0]) {
            $("#resultPic-"+i).attr("src",'https://maps.googleapis.com/maps/api/place/photo?maxwidth=96&photoreference='+map[i].photos?.[0].photo_reference+'&key=AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM');
        } else {
            $("#resultPic-"+i).attr("src","https://bulma.io/images/placeholders/96x96.png");
        }
        console.log(map[i].name);
        console.log(map[i].photos?.[0].html_attributions[0]);
        //$("#resultPhone-"+i).text(result.formatted_phone_number);
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id="+map[i].place_id+"&fields=name,rating,formatted_phone_number&key=AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM"
            ,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        })
    };

    
}

function googleApi() {
    //remove https://cors-anywhere.herokuapp.com/ from the url in the query url
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=food+trucks&location="+userPosition.lat+","+userPosition.lon+"&radius=10000&key=AIzaSyBL-L9x6O3SIMHJkubbfPAPXsr_a1nx3EM";
    
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