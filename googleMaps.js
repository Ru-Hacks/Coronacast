//import {map1, marker1} from './weather.js';
// var map;
var map;
var marker;

function initMap() {
    var place = {lat: 43.6532, lng: -79.3832};

    var options = {
        zoom: 14,
        center: place
    };
    map = new google.maps.Map(document.getElementById('map'), options);

    marker = new google.maps.Marker({position: place, map: map});

    // var trafficlayer = new google.maps.TrafficLayer(); // Shows traffic (red places)
    // trafficlayer.setMap(map);
}

// function changeMap(map1, marker1){
//     map = map1;
//     marker = marker1;
    
// }

function switchTraffic(){
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}


function switchBicycle(){
    var bicyclelayer = new google.maps.BicyclingLayer();
    bicyclelayer.setMap(map);
}

function switchClear(){
    var transitLayer = new google.maps.RendererLayer();
    transitLayer.setMap(map);
}