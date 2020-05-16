
// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}
weather.humidity = {
    
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
//const key = "82005d27a116c2880c8f0fcb866998a0"; //original
const key = "3d0ceda21a165fd1635f2cae0c3a32cb";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
// if('geolocation' in navigator){
//     navigator.geolocation.getCurrentPosition(setPosition, showError);
// }else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
// }

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`;
// }

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            //weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    // iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    // tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    // descElement.innerHTML = weather.description;
    // locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

//added by krish, input city name and get info
// function getWeatherByCity(cityName){
function getWeatherByCity(){
    let cityName = document.getElementById("cityNameField").value;
    console.log(cityName); //testing

    //let api = `http://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={key}`;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    console.log(api);

    var humidity;
    fetch(api)
        .then(function(response){
            let data = response.json();
            console.log(data);
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            //weather.iconId = data.weather[0].icon;
            //weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity = data.main.humidity;
            console.log(data.main.humidity);
        })
        .then(function(){
            displayWeather();
        });

    console.log("asdf");
    console.log(weather.description);
    document.getElementById("temp-val").innerHTML = "Temperature: " + weather.temperature.value;
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity;

}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
// tempElement.addEventListener("click", function(){
//     if(weather.temperature.value === undefined) return;
    
//     if(weather.temperature.unit == "celsius"){
//         let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
//         fahrenheit = Math.floor(fahrenheit);
        
//         tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
//         weather.temperature.unit = "fahrenheit";
//     }else{
//         tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
//         weather.temperature.unit = "celsius"
//     }
// });