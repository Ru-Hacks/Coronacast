function printDesc(weather){

var humidity ={


};
var temp = {



};
var age = 60;


var humidityLocal = localStorage.getItem("vOneLocalStorage");
var description;
var result;
var percent = 23;

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


description = humidity.result;

document.getElementById("percent").innerHTML = "Percent Confidence: " + percent;
document.getElementById("description").innerHTML = "Desc: " + description;
document.getElementById("thermImg").src = "cold.png";
    
    if (humidity.prop.localeCompare("low")){
  document.getElementById("suggestion").innerHTML += "Due to the drastically low humidity levels, it is not advised to go outside at this time.";
} else if (humidity.prop.localeCompare("med")){
    document.getElementById("suggestion").innerHTML += "The humidity levels are at a moderately safe level. Please take precaution.";
}else if (humidity.prop.localeCompare("high")){
    document.getElementById("suggestion").innerHTML += "Due to the drastically high humidity levels, it is not advised to go outside at this time.";
}

}
