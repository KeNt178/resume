function initMap() {
	var center = {lat: 47.5818414, lng: 2.5530366};
	var ensimag = {icon: "university.png", position: {lat: 45.1933905, lng: 5.7682998}};
	var velizy = {icon: "university.png", position: {lat: 48.781856, lng: 2.218230}};
	var utc = {icon: "university.png", position: {lat: 49.4155636, lng: 2.8184277}};
	var mediametrie = {icon: "mediametrie.png", position: {lat: 48.8970207, lng: 2.2873923}};
	var arismore = {icon: "arismore.png", position: {lat: 48.8417505, lng: 2.2197262}};

	var places =  [ensimag, velizy, utc, arismore, mediametrie];

	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, {center: center, zoom: 6});

	var zindex = 0;
	for (var i = 0; i < places.length; i++) {
		var marker = new google.maps.Marker({position: places[i]["position"], map: map, icon: "../img/" + places[i]["icon"], zIndex: zindex});
		google.maps.event.addListener(marker, "click", function(evenement) {
			map.panTo(evenement.latLng);
			map.setZoom(18);
		});
		zindex++;
	}
}
