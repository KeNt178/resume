var dictionary =
{
	"fr":{
		"title":[
			"<i class=\"fa fa-graduation-cap\"></i>Formation",
			"<i class=\"fa fa-suitcase\"></i>Expériences professionnelles",
			"<i class=\"fa fa-tachometer\"></i>Compétences",
			"<i class=\"fa fa-flag\"></i>Langues",
			"<i class=\"fa fa-magic\"></i>Spécificités personnelles",
			""
		],
		"name":[
			"Cursus d'ingénieur informatique",
			"DUT Informatique",
			"Tronc commun",
			"Baccalauréat Scientifique",

			"POC sur <a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"POC sur <a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"Application iOS",
			"Application interne de collaboration",

			"Programmation",
			"Web",
			"Outils",
			"Systèmes d'exploitation",

			"Français",
			"Anglais",
			"Espagnol",

			"Parachutiste",
			"Compétition inter-IUT — 24h de l'informatique",
			"Babysitting & Cours de Mathématiques",
			"Ramasseur de balles",
			"Passions"
		],
		"description":[
			"Major",
			"Mention bien",

			"E-marketing à l'aide d'une base de donnée graphes<ul><li>Liaisons des données CRM et de navigation Web de différents clients</li><li>Récupération d'une liste de contacts par calcul du chemin le moins cher en fonction d'une matrice de prix</li></ul>",
			"Détection d'incohérences au sein d'une BD relationnelle en la transposant en BD orientée graphes<ul><li>Modélisation de la BD & ingestion des données</li><li>Détection d'incohérences & propositions de rectification</li><li>Statistiques sur les audiences Internet multi-support</li></ul>",
			"Développement de <a href=\"https://itunes.apple.com/fr/app/togafmore/id581774033\"><i class=\"fa fa-link\"></i> TogafMore</a>",
			"",

			"",
			"",
			"",
			"",

			"Langue maternelle",
			"Courant — TOEIC 890 points",
			"Niveau B1",

			"10 sauts autonomes",
			"",
			"",
			"",
			"Musique — Théâtre — Piano — Judo — Tennis — Football"
		],
		"place":[
			"",
			"IUT de Vélizy-Villacoublay",
			"Université de Technologie de Compiègne",
			"",

			"",
			"",
			"",
			""
		],
		"date":[
			"aujourd'hui",
			"",
			"",
			"",
			"",

			"Juin – Juillet 2016",
			"Avril – Juillet 2015",
			"Juillet 2014",
			"Juillet 2012"
		]
	},
	"en":{
		"title":[
			"<i class=\"fa fa-graduation-cap\"></i>Education",
			"<i class=\"fa fa-suitcase\"></i>Work experience",
			"<i class=\"fa fa-tachometer\"></i>Skills",
			"<i class=\"fa fa-flag\"></i>Languages",
			"<i class=\"fa fa-magic\"></i>Interests & activities",
			""
		],
		"name":[
			"Computer engineer curriculum",
			"Two-year university degree in computer science",
			"Core curriculum",
			"Science baccalaureate",

			"POC on <a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"POC on <a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"iOS application",
			"Internal application of collaboration",

			"Programming",
			"Web",
			"Tools",
			"Operating systems",

			"Français",
			"English",
			"Spanish",

			"Parachutist",
			"Interschool competition — 24h of computing",
			"Babysitting & Mathematics lessons",
			"Ball boy",
			""
		],
		"description":[
			"Top of the year",
			"With honours",

			"E-marketing with graph-oriented database<ul><li>Linking CRM and Web navigation data from several clients</li><li>Collecting a list of contacts by computing the least expensive path according to a price matrix</li></ul>",
			"Inconsistencies detection in a relational database by transposing it in a graph oriented database<ul><li>Database modeling & data ingestion</li><li>Inconsistencies detection & rectification proposals</li><li>Statistics over multisupport Internet audiences</li></ul>",
			"Development of <a href=\"https://itunes.apple.com/fr/app/togafmore/id581774033\"><i class=\"fa fa-link\"></i> TogafMore</a>",
			"",

			"",
			"",
			"",
			"",

			"Mother tongue",
			"Fluent — Good communication skills",
			"Basic notions",

			"10 autonomous jumps",
			"",
			"",
			"",
			"Music — Theatre — Piano — Judo — Tennis — Soccer"
		],
		"place":[
			"",
			"UIT of Vélizy-Villacoublay",
			"University of Technology of Compiègne",
			"",
			"",
			"",
			"",
			""
		],
		"date":[
			"today",
			"",
			"",
			"",
			"",
			"June - July 2016",
			"April - July 2015",
			"July 2014",
			"July 2012"
		]
	}
}

function switchLanguage() {
	if ($('input:checked').length === 1) {
		$('input').prop('checked', true);
		setLanguageWithAnimation("en");
	} else {
		setLanguageWithAnimation("fr");
	}
}

function setLanguageWithAnimation(language) {
	var set = false;
	$('.name, .date, .place, .description, .title, #description').fadeOut(function() {
		if (!set) {
			setLanguage(language);
			set = true;
		}
	});
	$('.name, .date, .place, .description, .title, #description').fadeIn(1500);
}

function setLanguage(language) {
	$("#description").text((language == 'fr') ? "Étudiant à l'ENSIMAG" : "Student at ENSIMAG");
	$("#switchflag").css('background-image', 'url("../img/' + language + '_flag.svg"');
	for (var classe in dictionary[language]) {
		setClassValues(classe, dictionary[language][classe]);
	}
}

function setClassValues(classe, values) {
	var classes = document.getElementsByClassName(classe);
	for (var i = 0; i < classes.length; i++) {
		if (values[i] !== '') {
			classes[i].innerHTML = values[i];
			if (classe === 'date' & i < 5) {
				classes[i].innerHTML += '<span class="bullet">&#8226;</span>';
			}
		}
	}
}
