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

    


humidity.result= " The humidity is ";
 humidity.prop + ". It is " + humidity.value;

 var humidityFactor = 50;
 var tempFactor = 30;
 var windFactor = 20;
 var tempTemp = weather.temperature.value;

 var tempWind = weather.wind;

 if(weather.wind>30)
    tempWind = 30;
    

 if(weather.temperature.value <0)
 tempTemp = 0;
 else if(weather.temperature.value >30)
 tempTemp = 30;


document.getElementById("percent").innerHTML = "Percent Confidence: " + percent;
document.getElementById("description").innerHTML = "Desc: " + description;
document.getElementById("thermImg").src = "cold.png";
    

let ageInfo = document.getElementById("cityAgeField").value;

if (humidity.value< 35){
  document.getElementById("suggestion").innerHTML += "Due to the drastically low humidity levels, ";
} else if (humidity.value<=55){
    document.getElementById("suggestion").innerHTML += "The humidity levels are at a moderately safe level. ";
}else {
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

 percent = humidityFactor*(1- humidity.value/100) + tempFactor*(tempTemp/30 ) + windFactor*(1- tempWind/30);


//description = "The weather is " +  weather.description + humidity.result;

document.getElementById("humidityF").innerHTML = "Humidity: "+ Math.ceil(humidityFactor*(1- humidity.value/100)) + "% / "+ humidityFactor+"%";
document.getElementById("temper").innerHTML = "Temperature: "+ Math.ceil(tempFactor*(tempTemp/30 )) + "% / "+ tempFactor+"%";
document.getElementById("windF").innerHTML = "Wind: "+ Math.ceil(windFactor*(1- tempWind/30)) + "% / "+ windFactor+"%";
document.getElementById("percent").innerHTML = "Percent Confidence: " + Math.ceil(percent) +"%";
//document.getElementById("weatherQual").innerHTML = description;
if(weather.temperature.value<5)
document.getElementById("thermImg").src = "cold.png";
else if(weather.temperature.value<15)
document.getElementById("thermImg").src = "green.png";
else
document.getElementById("thermImg").src = "hot.png";
}
