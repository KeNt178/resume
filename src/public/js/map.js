function initMap() {
  var center = {lat: 39.804742, lng: 52.5776676};

  var education = {
    url: '../img/education.svg',
    scaledSize: new google.maps.Size(30, 30),
    anchor: new google.maps.Point(15, 45)
  }

  var ensimag = {
    position: { lat: 45.1933905, lng: 5.7682998 },
    icon: education
  }

  var velizy = {
    position: { lat: 48.781856, lng: 2.218230 },
    icon: education
  }

  var utc =  {
    position: { lat: 49.4155636, lng: 2.8184277 },
    icon: education
  }

  var mediametrie = {
    position: { lat: 48.8970207, lng: 2.2873923 },
    icon: {
      url: '../img/mediametrie.png',
      scaledSize: new google.maps.Size(26, 26),
      anchor: new google.maps.Point(13, 43)
    }
  }

  var arismore = {
    position: { lat: 48.8417505, lng: 2.2197262 },
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

  var rgx1 = {
    position: { lat: 43.6270362, lng: 7.0386743 },
    icon: {
      url: '../img/rgx.png',
      scaledSize: new google.maps.Size(34, 34),
      anchor: new google.maps.Point(17, 47)
    }
  }

  var parachute = {
    position: { lat: 47.9020811, lng: 2.1688557 },
    icon: {
      url: '../img/parachute.svg',
      scaledSize: new google.maps.Size(66, 39),
      anchor: new google.maps.Point(33, 47)
    }
  }

  var srb1 = {
    position: { lat: 48.875357, lng: 2.3493883 },
    icon: {
      url: '../img/srb.jpg',
      scaledSize: new google.maps.Size(28, 28),
      anchor: new google.maps.Point(14, 45)
    }
  }

  var srb2 = {
    position: { lat: 11.5747761, lng: 104.9046362 },
    icon: {
      url: '../img/srb.jpg',
      scaledSize: new google.maps.Size(28, 28),
      anchor: new google.maps.Point(14, 45)
    }
  }

  var vauban = {
    position: { lat: 51.5273313, lng: -0.0885324 },
    icon: {
      url: '../img/vauban.png',
      scaledSize: new google.maps.Size(28, 28),
      anchor: new google.maps.Point(14, 45)
    }
  }

  var places =  [srb1, srb2, ensimag, arismore, cabestan, rgx1, mediametrie, vauban]; // parachute
  var colors = ['white', 'white', 'orange', 'black', 'blue', 'grey', 'green', 'white']; // 'grey'

  var mapDiv = document.getElementById("map");
  var map = new google.maps.Map(mapDiv, { center: center, zoom: 3 });

  var zindex = 0;
  for (var i = 0; i < places.length; i++) {
    places[i].map = map;
    var marker = new google.maps.Marker({ position: places[i].position, map: map, icon: { url: '../img/map_icon_' + colors[i] + '.svg', scaledSize: new google.maps.Size(50, 50) }, zIndex: zindex++ });
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
