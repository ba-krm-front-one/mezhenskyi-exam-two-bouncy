function initMap() {
	var coordinates = {lat: 48.7345164, lng: 37.579577};
	var infoWindowText = document.querySelector('.ba-infoText').innerHTML;
	var mapContainer = document.querySelector('#map');
	var map = new google.maps.Map(mapContainer, {
		center: coordinates,
		zoom: 15,
		disableDefaultUI: true
	});

	var infowindow = new google.maps.InfoWindow({
		content: infoWindowText,
		maxWidth: 500,

	});

	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: "assets/img/map-marker.png"
	});

	//infowindow.open(map, marker);

	marker.addListener('click', function () {
		infowindow.open(map, marker);
	});

	google.maps.event.addDomListener(window, "resize", function () {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map .setCenter(center);
	})
}