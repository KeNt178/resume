function initMap() {


	var center = {lat: 47.5818414, lng: 2.5530366};
	var ensimag = {
		position: {lat: 45.1933905, lng: 5.7682998},
		icon: {
			url: '../img/education.svg',
			scaledSize: new google.maps.Size(26, 26),
			anchor: new google.maps.Point(13, 45)
		}
	}
	var velizy = {
		position: {lat: 48.781856, lng: 2.218230},
		icon: {
			url: '../img/education.svg',
			scaledSize: new google.maps.Size(26, 26),
			anchor: new google.maps.Point(13, 45)
		}
	}
	var utc =  {
		position: {lat: 49.4155636, lng: 2.8184277},
		icon: {
			url: '../img/education.svg',
			scaledSize: new google.maps.Size(26, 26),
			anchor: new google.maps.Point(13, 45)
		}
	}

	var mediametrie = {
		position: {lat: 48.8970207, lng: 2.2873923},
		icon: {
			url: '../img/mediametrie.png',
			scaledSize: new google.maps.Size(26, 26),
			anchor: new google.maps.Point(13, 43)
		}
	}
	var arismore = {
		position: {lat: 48.8417505, lng: 2.2197262},
		icon: {
			url: '../img/arismore.png',
			scaledSize: new google.maps.Size(34, 34),
			anchor: new google.maps.Point(17, 47)
		}
	}
	var cabestan = {
		position: {lat: 48.8486972, lng: 2.2814019},
		icon: {
			url: '../img/cabestan.svg',
			scaledSize: new google.maps.Size(34, 34),
			anchor: new google.maps.Point(17, 47)
		}
	}

	var places =  [ensimag, velizy, utc, arismore, mediametrie, cabestan];
	var colors = ['orange', 'orange', 'orange', 'black', 'green', 'blue'];

	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, {center: center, zoom: 6});

	var zindex = 0;
	for (var i = 0; i < places.length; i++) {
		places[i].map = map;
		var marker = new google.maps.Marker({position: places[i].position, map: map, icon: {url: '../img/map_icon_' + colors[i] + '.svg', scaledSize: new google.maps.Size(50, 50)}, zIndex: zindex++});
		places[i].zIndex = zindex++;
		var marker2 = new google.maps.Marker(places[i]);
		google.maps.event.addListener(marker, "click", function(evenement) {
			map.panTo(evenement.latLng);
			map.setZoom(19);
		});
		google.maps.event.addListener(marker2, "click", function(evenement) {
			map.panTo(evenement.latLng);
			map.setZoom(19);
		});
		zindex++;
	}
}
