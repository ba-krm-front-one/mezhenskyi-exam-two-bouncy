function initMap() {
	let coordinates = {lat: 48.7345164, lng: 37.579577};
	let mapContainer = document.querySelector('#map');
	let map = new google.maps.Map(mapContainer, {
		center: coordinates,
		zoom: 15,
		disableDefaultUI: true,
		scrollwheel: false
	});

	let marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		icon: "assets/img/map-marker.png"
	});

	google.maps.event.addDomListener(window, "resize", function () {
		let center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	})
}
