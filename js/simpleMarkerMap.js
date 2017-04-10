var map;
var myLatLng = {lat: 40.74135, lng: -73.99802};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.74, lng: -73.99},
    zoom: 12
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        lat: myLatLng.lat,
        lng: myLatLng.lng,
        title: '(lat, long) = '
    });

    var largeInfowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var contentString = '<p>' + marker.title + '(' + marker.lat + ', ' + marker.lng + ')' + '</p>';

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker = null;
            });
        }
    }

    marker.addListener('click', function() {
        populateInfoWindow(this, largeInfowindow);
    });
}
