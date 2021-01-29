function loadData(locale) {
  var file = "../js/languages.yml"
  var rawFile = new XMLHttpRequest();
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        var yml = jsyaml.load(allText);
        setLanguage(locale, yml[locale])
      }
    }
  }
	rawFile.open("GET", file);
  rawFile.send(null);
}

function switchLanguage() {
  if ($('input:checked').length === 1) {
    $('input').prop('checked', true);
    setLanguageWithAnimation("en");
  } else {
    setLanguageWithAnimation("fr");
  }
}

function setLanguageWithAnimation(locale) {
  var set = false;
  $('.name, .date, .place, .description, .title, #skills, #wannalearn').fadeOut(function() {
    if (!set) {
      loadData(locale);
      set = true;

    }
  });
  $('.name, .date, .place, .description, .title, #skills, #wannalearn').fadeIn(1500);
}

async function setLanguage(locale, data) {
  $("#description").text((locale == 'fr') ? "Data & DevSecOps" : "Data & DevSecOps");
  $("#switchflag").css('background-image', 'url("../img/' + locale + '_flag.svg"');
  $("#skills").text((locale == 'fr') ? "Compétences" : "Skills");
  $("#wannalearn").text((locale == 'fr') ? "Souhaits de formation" : "Formation wishes");
  for (var classe in data) {
    setClassValues(classe, data[classe]);
  }
}

function setClassValues(classe, values) {
  var classes = document.getElementsByClassName(classe);
  for (var i = 0; i < classes.length; i++) {
    classes[i].innerHTML = values[i];

    // bullets
    if (classe === 'date' & i >= 2) {
      classes[i].innerHTML += '<span class="bullet">&#8226;</span>';
    }
  }
}
