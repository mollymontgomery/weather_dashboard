// My weather API key
var apiKey= "8f34a961cac45cf68d8dad2a485aae8b"
// var searchQueryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ apiKey;
// var url = "https://api.openweathermap.org/data/2.5/weather?q="

var cityInput = document.getElementById('cityInput')
var searchButton = document.getElementById('searchButton')
var currentWeather = document.getElementById('currentWeather')
var weatherConditions = document.getElementById('weatherConditions')
var fiveDayForecast = document.getElementById('fiveday-container')
var cityList = document.getElementById('cityList')
let cityName = document.getElementById("city")

function searchCity () {
  var city = cityInput.value
  getCurrentWeather(city)
};

function getCurrentWeather(city) {

  var url = "https://api.openweathermap.org/data/2.5/weather?q="
  url += city + "&appid=" + apiKey + "&units=imperial"

  fetch(url).then(function(data) {
    if (data.ok) {
      data.json().then(function(body) {
        console.log(body)

        let currentCity = body.name
        console.log(currentCity)
        let cardTitle = document.createElement("h3")
        cardTitle.textContent = currentCity
        // dynamically creating p tag and adding class and text for temperature
        let temp = document.createElement("p")
        temp.setAttribute("class", "card-text")
        temp.textContent = "Temperature: " + body.main.temp + "F"

        // This is the same as lines 37-39 but using jQuery to dynamically create the element, add class, and text
        // let temp = $("<p class='card-text'>").text("Temperature: " + data.main.temp + "F")


        weatherConditions.append(temp)
        cityName.append(cardTitle)
        

        let coords = {
          lat: body.coord.lat,
          lon: body.coord.lon
        }

        getFiveDay(coords)
      }) 
    }
    else {
      console.log('data is not okay')
    }
  });
    
}

function getFiveDay(coord){
  console.log("Coords being passed from getCurrent Weather to getFive Day", coord)
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&appid=${apiKey}`

fetch(url)
.then(response => response.json())
.then(data => {
  console.log("FIVE DAY DATA",data)
  let uvIndex = "UV Index: " +data.current.uvi
  let uvIndexBtn = document.createElement("button")
  uvIndexBtn.setAttribute("class", "btn")
  
  if(uvIndex < 3){
    uvIndexBtn.setAttribute("class", "btn-success")
  } else if(uvIndex < 7){
    uvIndexBtn.setAttribute("class", "btn-warning")
  } else if(uvIndex < 10) {
    uvIndexBtn.setAttribute("class", "btn-danger")
  }
  uvIndexBtn.append(uvIndex)
  currentWeather.append(uvIndexBtn)

  for(let i = 1; i < 6; i++){
    console.log(data.daily[i])

    let card = document.createElement("div")
    card.setAttribute("class", "card col-2")

    let temp= document.createElement("p")
    temp.setAttribute("class", 'card-text')
    temp.textContent = "Temperature: "+ data.daily[i].temp.day + "F"

    card.append(temp)
    fiveDayForecast.append(card)
  }
  
})
}


searchButton.addEventListener("click", searchCity)
