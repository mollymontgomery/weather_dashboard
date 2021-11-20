// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
// var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey;
var url = "https://api.openweathermap.org/data/2.5/weather?q="

var cityInput = document.getElementById('cityInput')
var searchButton = document.getElementById('searchButton')
var currentWeather = document.getElementById('currentWeather')
var weatherConditions = document.getElementById('weatherConditions')
var fiveDayForecast = document.getElementById('fiveDayForecast')


function searchCity () {
  var city = cityInput.value
  url += city + "&appid=" + apiKey
  fetch(url).then(function(data) {
    data.json().then(function(body) {
      console.log(body)
    })
  })
}



searchButton.addEventListener("click", searchCity)






