var map;

function initMap() {
    let place = {lat: 43.6532, lng: -79.3832};

    var options = {
        zoom: 14,
        center: place
    };
    map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({position: place, map: map});

    // var trafficlayer = new google.maps.TrafficLayer(); // Shows traffic (red places)
    // trafficlayer.setMap(map);
}

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