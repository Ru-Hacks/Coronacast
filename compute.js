function printDesc(weather){

var humidity ={


};
var temp = {



};
var age = 60;
//---------------



//---------------

var humidityLocal = localStorage.getItem("vOneLocalStorage");  
var description;
var result;
var percent;
humidity.value = weather.humidity;
temp.value = weather.temperature.value;

if(humidity.value< 33)
    humidity.prop = "low";
else if(humidity.value<66)
    humidity.prop = "med";
else 
    humidity.prop = "high";


humidity.result= "The weather is " +  weather.description + ". The humidity is " +
 humidity.prop + ". It is " + humidity.value;

 temp.result = "The temperature is  " + temp.value;

description = humidity.result + temp.result;
percent =23;
    
document.getElementById("percent").innerHTML = "Recommendation Percent: " + percent + "%";
document.getElementById("description").innerHTML = "Desc: " + description;
document.getElementById("thermImg").src = "cold.png";

}