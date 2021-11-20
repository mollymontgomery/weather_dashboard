// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
//var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey; 

var cityInput = document.getElementById('cityInput')
var cityList = [];

console.log(cityInput);

searchButton.addEventListener("click", function(){
    var inputEl = document.getElementById("cityInput");
    console.log(inputEl.value);
})