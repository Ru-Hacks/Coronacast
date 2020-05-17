
// App data
const weather = {};


weather.temperature = {
    unit: "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
//const key = "82005d27a116c2880c8f0fcb866998a0"; //original
const key = "3d0ceda21a165fd1635f2cae0c3a32cb";

// SET USER'S POSITION
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function (response) {
            let data = response.json();
            Console.log(data);
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            //weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function () {
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather() {
    // iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    // tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    // descElement.innerHTML = weather.description;
    // locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}

//document.getElementById("getWeather").addEventListener("click", getWeatherByCity);

//added by krish, input city name and get info
// function getWeatherByCity(cityName){
var map;
function getWeatherByCity() {

    let cityName = document.getElementById("cityNameField").value;
    console.log(cityName); //testing

    //let api = `http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={key}`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    console.log(api);

    //Fetches api by inputing the url    
    fetch(api)
        .then(function (response) {

            // if(response.statusCode == 404){
            //     console.log("AAAAAAAAAArip")
            // }
            let data = response.json(); //data holds the json
            //console.log(data);
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);  //converts the temperature into celius
            weather.description = data.weather[0].description; //
            //weather.iconId = data.weather[0].icon;
            //weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity = data.main.humidity; //gets huimidity 
            weather.wind = data.wind.speed; //windspeed

            // document.getElementById("temp-val").innerHTML = "Temperature: " + weather.temperature.value;
            // document.getElementById("humidity").innerHTML = "Humidity: " + weather.humidity;
            // document.getElementById("description").innerHTML = "Description: " + weather.description;
            // document.getElementById("wind").innerHTML = "Wind Speed: " + weather.wind;

            var lat1 = data.coord.lat; //gets latitude
            var lon1 = data.coord.lon; //gets longitude

            //sets place, to move the map to that lat and long
            place = { lat: lat1, lng: lon1 };
            console.log(lat1 + " " + lon1);
            //export {place};

            var options = {
                zoom: 14,
                center: place
            };

            //creates new instance of map using that location
            map = new google.maps.Map(document.getElementById('map'), options);

            //moves marker to that location
            var marker = new google.maps.Marker({ position: place, map: map });
            //export {map1, marker1};
            // changeMap(map1, marker1);
        })
        .then(function () {
            displayWeather(); //was testing 
            //localStorage.setItem("vOneLocalStorage", humidity.value);
            printDesc(weather); //calls printDesc, in ./compute.js/
        })
        .catch((error) => {
            window.alert("Please enter a valid city!");
            //if city name is invalid or doesn't exist, it will send an alert to user
        });
        

    // document.getElementById("temp-val").innerHTML = "Temperature: " + weather.temperature.value;
    // document.getElementById("humidity").innerHTML = "Humidity: " + weather.humidity;
    document.getElementById("cityNameField").value = "";
    document.getElementById("suggestion").innerHTML ="";
}

