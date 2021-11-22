// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
// var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey;
// var url = "https://api.openweathermap.org/data/2.5/weather?q="

var cityInput = document.getElementById('cityInput')
var searchButton = document.getElementById('searchButton')
var currentWeather = document.getElementById('currentWeather')
var weatherConditions = document.getElementById('weatherConditions')
var fiveDayForecast = document.getElementById('fiveDayForecast')
var cityList = document.getElementById('cityList')

function searchCity () {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="
  var city = cityInput.value
  url += city + "&appid=" + apiKey
  fetch(url).then(function(data) {
    if (data.ok) {
      data.json().then(function(body) {
        console.log(body)
      }) 
    }
    else {
      console.log('data is not okay')
    }
  });
};

function currentForecast(data) {
    console.log(data);
    currentWeather.innerText = data.name + " " + moment().format("l");

    var icons = document.createElement("span")

    var temp = document.createElement("p");
    temp.textContent = data.main.temp + "F";
    currentWeather.append(temp);
}

searchButton.addEventListener("click", searchCity)
