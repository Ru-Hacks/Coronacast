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
    

let ageInfo = document.getElementById("cityAgeField").value;

if (humidity.prop.localeCompare("low")){
  document.getElementById("suggestion").innerHTML += "Due to the drastically low humidity levels, ";
} else if (humidity.prop.localeCompare("med")){
    document.getElementById("suggestion").innerHTML += "The humidity levels are at a moderately safe level. ";
}else if (humidity.prop.localeCompare("high")){
    document.getElementById("suggestion").innerHTML += "Due to the drastically high humidity levels, ";
}

if (ageInfo >= 80){
    document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places unless it is an emergency.";
}else if (ageInfo>=60){
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places unless absolutely necessary.";
}else if (ageInfo < 60 && humidity.prop.localeCompare("med")){
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places when possible. Remember to wear personal protective equipment such as face masks and gloves.";
}else {
      document.getElementById("suggestion").innerHTML += "Please try to avoid going out to public places when possible and you are more at risk to the current weather conditions. Remember to wear personal protective equipment such as face masks and gloves.";
}

}
