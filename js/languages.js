var dictionary =
{
	"french":{
		"title":[
			"<i class=\"fa fa-graduation-cap\"></i>" + "Formation",
			"<i class=\"fa fa-suitcase\"></i>" + "Expériences professionnelles",
			"<i class=\"fa fa-tachometer\"></i>" + "Compétences",
			"<i class=\"fa fa-flag\"></i>" + "Langues étrangères",
			"<i class=\"fa fa-magic\"></i>" + "Spécificités personnelles",
			""
		],
		"name":[
			"Cursus d'ingénieur informatique",
			"DUT Informatique",
			"Tronc commun",
			"Baccalauréat Scientifique",
			"POC sur la base de données graphes " + "<a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"Application iOS",
			"Application interne de collaboration",
			"Programmation",
			"Outils",
			"Systèmes d'exploitation",
			"Anglais",
			"Espagnol",
			"Parachutiste",
			"",
			"Ramasseur de balles"
		],
		"description":[
			"Mention bien — 15,92",
			"Détection d'incohérences au sein d'une BD relationnelle par sa transposition en BD orientée graphes",
			"Développement de " + "<a href=\"https://itunes.apple.com/fr/app/togafmore/id581774033\"><i class=\"fa fa-link\"></i> TogafMore</a>",
			"",
			"",
			"",
			"",
			"Courant — TOEIC 890 points",
			"Niveau B1",
			"10 sauts autonomes",
			"En compétition",
			""
		],
		"place":[
			"",
			"IUT de Vélizy-Villacoublay",
			"Université de Technologie de Compiègne",
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
			"Avril - Juillet 2015",
			"Juillet 2014",
			"Juillet 2012"
		]
	},
	"english":{
		"title":[
			"<i class=\"fa fa-graduation-cap\"></i>" + "Education",
			"<i class=\"fa fa-suitcase\"></i>" + "Work experience",
			"<i class=\"fa fa-tachometer\"></i>" + "Skills",
			"<i class=\"fa fa-flag\"></i>" + "Foreign languages",
			"<i class=\"fa fa-magic\"></i>" + "Interests & activities",
			""
		],
		"name":[
			"Computer engineer curriculum",
			"Two-year university degree in computer science",
			"Core curriculum",
			"Science baccalaureate",
			"POC on the graph database " + "<a href=\"http://neo4j.com/\"><i class=\"fa fa-link\"></i> Neo4j</a>",
			"iOS application",
			"Internal application of collaboration",
			"Programming",
			"Tools",
			"Operating systems",
			"English",
			"Spanish",
			"Parachutist",
			"",
			"Ball boy"
		],
		"description":[
			"With honours",
			"Detection of inconsistencies in a relational database by transposing it in a graph oriented database",
			"Development of " + "<a href=\"https://itunes.apple.com/fr/app/togafmore/id581774033\"><i class=\"fa fa-link\"></i> TogafMore</a>",
			"",
			"",
			"",
			"",
			"Fluent — Good communication skills",
			"Basic notions",
			"10 autonomous jumps",
			"Competition level",
			""
		],
		"place":[
			"",
			"UIT of Vélizy-Villacoublay",
			"University of Technology of Compiègne",
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
			"April - July 2015",
			"July 2014",
			"July 2012"
		]
	}
}

function switchLanguage() {
	var image = document.getElementById("flag");
	if (image.src.match("france")) {
		image.src = "img/uk_flag.svg";
		setLanguage("english");
	} else {
		image.src = "img/france_flag.svg";
		setLanguage("french");
	}
}

function setLanguage(language) {
	document.getElementById("description").innerHTML = (language === "french")?"Etudiant à l'ENSIMAG":"Student at ENSIMAG";
	for (var classe in dictionary[language]) {
		changeClassValues(classe, dictionary[language][classe]);
	}
}

function changeClassValues(classe, values) {
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
