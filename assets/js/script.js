// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
//var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey; 

var searchedCities = JSON.parse(localStorage.getItem("city")) || [];
var searchEl = document.getElementById("search-button");


fetch(searchQueryURL).then(function(response){
    if (response.ok){
        return response.json()
    }
})
.then(function(data){
    console.log("city, data")
})

