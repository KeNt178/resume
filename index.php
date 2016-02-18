﻿<!--
	* Personal Cards 1.0 by Luca Cassani *

	You can copy, modify, publish, use, sell,
	or distribute this template for any purpose,
	commercial or non-commercial, and by any means.
	It requires no special copyright notes nor attribution.
-->

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Resume — LAPOINTE Quentin</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<meta name="description" content="Your meta-description here">
	<meta name="author" content="Quentin Lapointe">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="theme-color" content="#2196F3">
</head>
<body>
<div id="blue_bg"></div>
<header>
	<div id="quick_card" class="card">
		<div><img id="photo" src="img/photo.jpg" /></div> <!-- replace photo in /img/ 705x705 -->
		<h1 id="name">Quentin Lapointe</h1>
		<h2 id="description">Étudiant à l'ENSIMAG</h2>
		<h3 id="sousdescription">École Nationale Supérieure d'Informatique et de Mathématiques Appliquées</h3>
	</div>
</header>
<main>
<div id="about_card" class="card">
	<section class="tab formation">
		<div class="title"><i class="fa fa-graduation-cap"></i>Formation</div>
		<div class="content">
			<section class="element">
				<div class="date"><?php echo "hello"; ?>aujourd'hui<span class="bullet">&#8226;</span></div>
				<div class="name">Cursus d'ingénieur informatique</div>
				<div class="place">ENSIMAG</div>
			</section>
			<section class="element">
				<div class="date">2015<span class="bullet">&#8226;</span></div>
				<div class="name">DUT Informatique</div>
				<div class="place">IUT de Vélizy-Villacoublay</div>
			</section>
			<section class="element">
				<div class="date">2013<span class="bullet">&#8226;</span></div>
				<div class="name">Tronc Commun</div>
				<div class="place">Université de Technologie de Compiègne</div>
			</section>
			<section class="element">
				<div class="date">2012<span class="bullet">&#8226;</span></div>
				<div class="name">Baccalauréat Scientifique</div>
				<div class="description">Mention bien – 15.92</div>
				<div class="place">Saint-Germain-en-Laye</div>
				<div class="date">2011<span class="bullet">&#8226;</span></div>
			</section>
		</div>
	</section>
</div>
<div id="about_card" class="card">
	<section class="tab">
		<div class="title"><i class="fa fa-suitcase"></i>Expériences professionnelles</div>
		<div class="content">
			<section class="element">
				<div class="date">Avril – Juillet 2015</div>
				<div class="place">Médiamétrie</div>
				<div class="name">POC sur la base de données graphes <a href="http://neo4j.com/"><i class="fa fa-link"></i> Neo4j</a></div>
				<div class="description">Détection d'incohérences au sein d'une BD relationnelle par sa transposition en BD orientée graphes</div>
			</section>
			<section class="element">
				<div class="date">Juillet 2014</div>
				<div class="place">Arismore</div>
				<div class="name">Application iOS</div>
				<div class="description">Développement de <a href="https://itunes.apple.com/fr/app/togafmore/id581774033"><i class="fa fa-link"></i> TogafMore</a></div>
			</section>
			<section class="element">
				<div class="date">Juillet 2012</div>
				<div class="place">Arismore</div>
				<div class="name">Application interne de collaboration</div>
				<div class="description">HTML - jQuery - Twitter Bootstrap</div>
			</section>
			<!-- You can add more experiences! -->
		</div>
	</section>
</div>
<div id="about_card" class="card">
	<section class="tab">
		<div class="title"><i class="fa fa-tachometer"></i>Compétences</div>
		<div class="content">
			<section class="element">
				<div class="name">Programmation</div>
				<div class="description">Neo4j — C — Objective-C — Java — Python — SQL — Web</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Outils</div>
				<div class="description">Eclipse — Xcode — Git — Atom</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Systèmes d'exploitation</div>
				<div class="description">Windows — Mac OS — Linux (ArchLinux, Debian, Red Hat)</div>
			</section>
		</div>
	</section>
</div>
<div id="about_card" class="card">
	<section class="tab">
		<div class="title"><i class="fa fa-flag"></i>Langues étrangères</div>
		<div class="content">
			<section class="element">
				<div class="name">Anglais</div>
				<div class="description">Courant — TOIEC 890 points</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Espagnol</div>
				<div class="description">Niveau B1</div>
			</section>
		</div>
	</section>
</div>
<div id="about_card" class="card">
	<section class="tab">
		<div class="title"><i class="fa fa-magic"></i>Spécificités personnelles</div>
		<div class="content">
			<section class="element">
				<div class="name">Parachutiste</div>
				<div class="description">10 sauts autonomes</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Ramasseur de balles</div>
				<div class="description">Roland Garros 2012</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Football</div>
				<div class="description">En compétition</div>
			</section>
			<hr align="left"/>
			<section class="element">
				<div class="name">Recordman du monde de bisous</div>
				<div class="description">185 bisous à 185 personnes en une minute</div>
			</section>
		</div>
	</section>
</div>
<div id="map_card" class="card map">
	<div id="map"></div>
</div>
<div id="contact_card" class="card">
	<section class="tab">
		<div class="title"><i class="fa fa-envelope"></i>Contact</div>
		<div class="content">
			<div class="contacts"><i class="fa fa-envelope"></i>&nbsp; <a href="mailto:q.lapointe@gmail.com">q.lapointe@gmail.com</a></div>
			<div class="contacts"><i class="fa fa-university"></i>&nbsp; <a href="mailto:quentin.lapointe@ensimag.grenoble-inp.fr">quentin.lapointe@ensimag.grenoble-inp.fr</a></div>
			<!-- You can add more contacts! -->
		</div>
	</section>
</div>
<a href="mailto:q.lapointe@gmail.com">
	<div id="fab">&nbsp;<i class="fa fa-envelope"></i>&nbsp;</div>
</a>
</main>
<footer>
  <small></small>
</footer>
<script>
	function initMap() {
		var center = {lat: 46.8035887, lng: 2.3297025}
		var ensimag = {lat: 45.1933905, lng: 5.7682998};
		var velizy = {lat: 48.7819096, lng: 2.2176999};
		var utc = {lat: 49.4155636, lng: 2.8184277};
		var mediametrie = {lat: 48.8970207, lng: 2.2873923};
		var arismore = {lat: 48.8417505, lng: 2.2197262};
		var work =  ['work.png', arismore, mediametrie];
		var study = ['university.png', ensimag, velizy, utc];
		places = [work, study];

		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {center: center, zoom: 5});

		var zindex = 0;
		for (var i = 0; i < places.length; i++) {
			typesofplace = places[1-i];
			for (var j = 1; j < typesofplace.length; j++) {
				var marker = new google.maps.Marker({position: typesofplace[j], map: map, icon: 'img/' + typesofplace[0], zIndex: zindex});
				zindex++;
			}
		}

	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?callback=initMap" async defer></script>
</body>
</html>
