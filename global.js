// Load the following when page is ready (sans jQuery)
document.addEventListener('DOMContentLoaded', function(){
    var mapID = "map";
    var mapBoxID = "arvindang.hc4402h2";

    var startingLatLong = [33.84659182298902, -118.03944826126099];
    var startingZoom = 16;

    // Initialize the map.
    var map = L.mapbox.map(mapID, mapBoxID)
        .setView(startingLatLong, startingZoom);

    if (!navigator.geolocation) {
        geolocate.innerHTML = 'geolocation is not available';
    } else {
        geolocate.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            map.locate();
        };
    }

    map.on('locationfound', function(e) {
        map.fitBounds(e.bounds);

        map.featureLayer.setGeoJSON({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [e.latlng.lng, e.latlng.lat]
            },
            properties: {
                'marker-color': '#000',
                'marker-symbol': 'star-stroked'
            }
        });

        // And hide the geolocation button
        geolocate.parentNode.removeChild(geolocate);
    });


});

window.distance = function(start, end) {
    // Assumes start & end are in [lat, long] format
    return Math.sqrt(Math.pow(start[0] - end[0], 2) + Math.pow(start[1] - end[1], 2));
};