function printDesc(weather){

var humidity ={


};
var temp = {



};

var humidityLocal = localStorage.getItem("vOneLocalStorage");  
var description;
var result;

humidity.value = weather.humidity;
temp.value = weather.temperature.value;

if(humidity.value< 33)
    humidity.prop = "low";
else if(humidity.value<66)
    humidity.prop = "med";
else 
    humidity.prop = "high";


humidity.result= "The humidity is " + humidity.prop + ". It is " + humidity.value;


description = humidity.result;
    

document.getElementById("description").innerHTML = "Desc: " + description;
}