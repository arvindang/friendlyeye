// Load the following when page is ready (sans jQuery)
document.addEventListener('DOMContentLoaded', function(){
    var map = L.mapbox.map('map', 'examples.map-20v6611k')
        .setView([33.84659182298902, -118.03944826126099], 16);

    L.mapbox.featureLayer({
        // this feature is in the GeoJSON format: see geojson.org
        // for the full specification
        type: 'Feature',
        geometry: {
            type: 'Point',
            // coordinates here are in longitude, latitude order because
            // x, y is the standard for GeoJSON and many formats
            coordinates: [-118.03944826126099, 33.84659182298902]
        },
        properties: {
            title: 'Friendly Eye Medical',
            description: 'Suite 44 on the fourth floor.',
            // one can customize markers by adding simplestyle properties
            // http://mapbox.com/developers/simplestyle/
            'marker-size': 'large',
            'marker-color': '#f0a'
        }
    }).addTo(map);
});