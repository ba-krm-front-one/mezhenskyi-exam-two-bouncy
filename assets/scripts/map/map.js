function initMap() {
	var coordinates = {lat: 48.7345164, lng: 37.579577};
	var mapContainer = document.querySelector('#map');
	var map = new google.maps.Map(mapContainer, {
		center: coordinates,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false
	});

	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: "assets/img/map-marker.png"
	});

	google.maps.event.addDomListener(window, "resize", function () {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	})
}
