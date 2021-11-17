function createCityList(citySearchList) {
    $("#city-list").empty();
}

var keys = Object.keys(citySearchList);
for (var i = 0; i <keys.length; i++){
    var cityListSpot = $("<button>");
    cityListSpot.addClass("list-group-item list-group-item-action");
}


var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"

var response =fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");
console.log(response)