// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
//var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey; 

var searchedCities = JSON.parse(localStorage.getItem("city")) || [];
var searchEl = document.getElementById("search-button");
var cityEl = document.getElementById("city");
var weatherDiv = document.getElementById("current-weather");
var cityHistory = document.getElementById("searchedCities");
var weatherContainer = document.getElementById("weather-conditions");
var fiveDayDiv = document.getElementById("fiveday-container")

// event for city search
searchEl.addEventListener("click", function() {
    var inputEl = document.getElementById("city-input");
    console.log(inputEl.value); 
    searchedCities.push(inputEl.value);
    
    localStorage.setItem("city", JSON.stringify(searchedCities));

    getWeather(inputEl.value);
    renderButton(inputEl.value);
})


