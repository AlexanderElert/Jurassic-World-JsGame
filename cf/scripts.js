
/* -DEFINIENDO VARIABLES INICIALES- */
var addRecord, addScore, answerA, answerB, answerC, answerCorrect, answerSelected, buttonPushdown, buttonPushup, checkAnswer, checkCard, combo, comboMax, confirmAble, confirmDisable, gameOver, generateCard, generateGame, generateRandom, getIndex, getValue, hideConfirm, hideCongratulations, hideGame, hideHome, hideRecords, imgBackground, imgquestion, minutes, printMaxcombo, printRecord, printResults, printScore, printTimeleft, printTotalscore, question, question1, question10, question2, question3, question4, question5, question6, question7, question8, question9, questionsAvailable, quitScore, randomCard, record, recordCounter, recordsList, remove, removeBackgrounds, removeSeconds, resetRadio, score, scoreBonus, scoreCalculate, scoreCheck, scoreCombomax, scoreTotal, scoreUpdate, seconds, selectquestions, shortRecords, showConfirm, showCongratulations, showGame, showHome, showRecords, time, timeFuncionA, timeFuncionB, timeFuncionC, timeFuncionE, timeFuncionF, timeFuncionG, timeFunctions, timer, value,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

imgBackground = '';

imgquestion = '';

question = '';

answerA = '';

answerB = '';

answerC = '';

answerCorrect = '';

answerSelected = '';

questionsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

value = 0;

score = 0;

scoreBonus = 0;

scoreCombomax = 0;

scoreTotal = 0;

combo = 0;

comboMax = 0;

time = 180;

minutes = Math.floor(time / 60);

seconds = time % 60;


/* -DEFINIENDO LISTA DE RECORDS- */

recordsList = [
  record = {
    name: "AlexMurió",
    points: 13200
  }, record = {
    name: "AlphaProteus",
    points: 13900
  }, record = {
    name: "Httpxsojin",
    points: 13500
  }, record = {
    name: "KingBehemoth",
    points: 12900
  }, record = {
    name: "MaritoBaracus",
    points: 13400
  }, record = {
    name: "RubiusOMG",
    points: 12700
  }, record = {
    name: "ElMaestrulli",
    points: 12300
  }, record = {
    name: "ORION",
    points: 11900
  }, record = {
    name: "PepaPig",
    points: 11600
  }, record = {
    name: "Vegeta777",
    points: 11100
  }
];


/* -DEFINIENDO PREGUNTAS- */

question1 = function() {
  if (value === 1) {
    imgBackground = 'card-bg-1';
    imgquestion = 'multimedia/header-1.jpg';
    question = '¿Cuales de estas especies fueron utilizadas para modificar el ADN del Indominus-Rex?';
    answerA = 'Moscas, Arañas y Delfines';
    answerB = 'Calamares, Ranas y Raptores';
    answerC = 'Tiranosaurus-Rex, Largartijas y Camaleones';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question2 = function() {
  if (value === 2) {
    imgBackground = 'card-bg-2';
    imgquestion = 'multimedia/header-2.jpg';
    question = '¿Como se llama el escritor de la novela "Parque Jurásico"?';
    answerA = 'Michael Crichton';
    answerB = 'Steven Spielberg';
    answerC = 'Colin Trevorrow';
    answerCorrect = answerA;
    return resetRadio();
  }
};

question3 = function() {
  if (value === 3) {
    imgBackground = 'card-bg-3';
    imgquestion = 'multimedia/header-3.jpg';
    question = '¿Que dinosaurio derrota al T-Rex en Jurassic Park 3?';
    answerA = 'Carcharodontosaurus';
    answerB = 'Suchomimus';
    answerC = 'Spinosaurus';
    answerCorrect = answerC;
    return resetRadio();
  }
};

question4 = function() {
  if (value === 4) {
    imgBackground = 'card-bg-4';
    imgquestion = 'multimedia/header-4.jpg';
    question = '¿Cual es el nombre de la criatura marina gigantesca exhibida en el parque?';
    answerA = 'Mosasaurus';
    answerB = 'Megalodón';
    answerC = 'Tylosaurus';
    answerCorrect = answerA;
    return resetRadio();
  }
};

question5 = function() {
  if (value === 5) {
    imgBackground = 'card-bg-5';
    imgquestion = 'multimedia/header-5.jpg';
    question = '¿Cual fue el metodo que implementó Owen para camuflarse del Indominus-Rex?';
    answerA = 'Cubrir su cuerpo con foleaje';
    answerB = 'Rosearse con gasolina';
    answerC = 'Permanecer totalmente inmóvil';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question6 = function() {
  if (value === 6) {
    imgBackground = 'card-bg-6';
    imgquestion = 'multimedia/header-6.jpg';
    question = '¿Cuales son los nombres de los raptores entrenados por Owen?';
    answerA = 'Blue, Charlie, Echo, Delta';
    answerB = 'Alfa, Beta, Omega, Zeta';
    answerC = 'Alfa, Blue, Charlie, Delta';
    answerCorrect = answerA;
    return resetRadio();
  }
};

question7 = function() {
  if (value === 7) {
    imgBackground = 'card-bg-7';
    imgquestion = 'multimedia/header-7.jpg';
    question = '¿Como se llama el vehículo redondo utilizado en las atracciones?';
    answerA = 'Cicloesfera';
    answerB = 'Globorotatorio';
    answerC = 'Giroesfera';
    answerCorrect = answerC;
    return resetRadio();
  }
};

question8 = function() {
  if (value === 8) {
    imgBackground = 'card-bg-8';
    imgquestion = 'multimedia/header-8.jpg';
    question = '¿Como se llama el dinosaurio volador con la cabeza parecida a la de un raptor?';
    answerA = 'Pteranodon';
    answerB = 'Dimorphodon';
    answerC = 'Microceratus';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question9 = function() {
  if (value === 9) {
    imgBackground = 'card-bg-9';
    imgquestion = 'multimedia/header-9.jpg';
    question = '¿Por qué los agentes de contención no pudieron rastrear al Indominus-Rex?';
    answerA = 'Por una falla electrica el sensor';
    answerB = 'El Indominus-Rex se lo arrancó';
    answerC = 'Se econtraba demasiado lejos de las torres de control';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question10 = function() {
  if (value === 10) {
    imgBackground = 'card-bg-10';
    imgquestion = 'multimedia/header-10.jpg';
    question = '¿Cual es el puesto de trabajo que ejerce Claire Dearing?';
    answerA = 'Manager de operaciones';
    answerB = 'Dueña de Jurassic World';
    answerC = 'Jefe en seguridad de InGen';
    answerCorrect = answerA;
    return resetRadio();
  }
};

addRecord = function() {
  var nickIngresado, puntosObtenidos;
  nickIngresado = prompt("ingrese su nick");
  puntosObtenidos = 999;
  record = {
    name: "" + nickIngresado,
    points: puntosObtenidos
  };
  shortRecords();
  printRecordslist();
  printRecord();
  return recordsList.push(record);
};

shortRecords = function() {
  return recordsList.sort(function(b, a) {
    if (a.points > b.points) {
      return 1;
    }
    if (a.points < b.points) {
      return -1;
    }
    return 0;
  });
};

recordCounter = 0;

printRecord = function() {
  var i, len, results;
  results = [];
  for (i = 0, len = recordsList.length; i < len; i++) {
    record = recordsList[i];
    $('#record-list .card ul').append("<li> <span>" + record.name + "</span> <span>" + record.points + "pts</span></li>");
    recordCounter += 1;
    if (recordCounter >= 11) {
      results.push($('#record-list .card ul li:last-child').remove());
    } else {
      results.push(void 0);
    }
  }
  return results;
};

shortRecords();

printRecord();

getValue = function() {
  value = Math.floor(Math.random() * 10 + 1);
  console.log(value);
  return console.log(questionsAvailable);
};

getIndex = function() {
  return questionsAvailable.indexOf(value);
};

remove = function() {
  getIndex();
  return questionsAvailable.splice(getIndex(), 1);
};

removeBackgrounds = function() {
  $('#game-card-overlay').removeClass('card-bg-1');
  $('#game-card-overlay').removeClass('card-bg-2');
  $('#game-card-overlay').removeClass('card-bg-3');
  $('#game-card-overlay').removeClass('card-bg-4');
  $('#game-card-overlay').removeClass('card-bg-5');
  $('#game-card-overlay').removeClass('card-bg-6');
  $('#game-card-overlay').removeClass('card-bg-7');
  $('#game-card-overlay').removeClass('card-bg-8');
  $('#game-card-overlay').removeClass('card-bg-9');
  return $('#game-card-overlay').removeClass('card-bg-10');
};

generateCard = function() {
  $('.question-header img').attr('src', imgquestion);
  removeBackgrounds();
  $('#game-card-overlay').addClass(imgBackground);
  $('.question').html(question);
  $('.answers > label:nth-child(2) > p').html(answerA);
  $('.answers > label:nth-child(4) > p').html(answerB);
  return $('.answers > label:nth-child(6) > p').html(answerC);
};

scoreUpdate = function() {
  $('.time-left span:first-child').html(minutes);
  $('.time-left span:last-child').html(seconds);
  return $('.score span:first-child').html(score);
};

checkCard = function() {
  $('.answers label:nth-child(2)').click(function() {
    answerSelected = answerA;
    return confirmAble();
  });
  $('.answers label:nth-child(4)').click(function() {
    answerSelected = answerB;
    return confirmAble();
  });
  return $('.answers label:nth-child(6)').click(function() {
    answerSelected = answerC;
    return confirmAble();
  });
};

addScore = function() {
  seconds += 2;
  score += 1000;
  combo += 1;
  if (combo >= comboMax) {
    comboMax = combo;
  }
  return console.log('combo Maximo =', comboMax);
};

quitScore = function() {
  score -= 500;
  combo = 0;
  return console.log('se quitaron 500pts por errar la resp');
};

scoreCalculate = function() {
  scoreBonus = (minutes * 1200) + (seconds * 20);
  scoreCombomax = comboMax * 1000;
  return scoreTotal = score + scoreBonus;
};

resetRadio = function() {
  $('#game-card input[type=radio]').prop("checked", false);
  answerSelected = '';
  return console.log('se resetearon los input checkeados y el valor correcto de las respuestas');
};

hideConfirm = function() {
  $('#confirm').fadeOut(0);
  return $('#incorrect').fadeIn(0);
};

showConfirm = function() {
  $('#incorrect').fadeOut(0);
  return $('#confirm').fadeIn(0);
};

confirmAble = function() {
  $('#confirm').prop("disabled", false);
  $('#confirm').html('Siguiente');
  $('#confirm').fadeIn(0);
  return showConfirm();
};

confirmDisable = function() {
  console.log('respuesta incorrecta');
  $('#confirm').prop("disabled", true);
  $('#confirm').html('Respuesta incorrecta');
  return hideConfirm();
};

buttonPushdown = function() {
  $('#confirm').css('transform', 'scale(0.9)');
  $('#confirm').css('transition', '0.1s ease-in');
  $('#incorrect').css('transform', 'scale(0.9)');
  return $('#incorrect').css('transition', '0.1s ease-in');
};

buttonPushup = function() {
  $('#confirm').css('transform', 'scale(1)');
  $('#confirm').css('transition', '0.2s ease-out');
  $('#incorrect').css('transform', 'scale(1)');
  return $('#incorrect').css('transition', '0.2s ease-out');
};

printResults = function() {
  scoreCalculate();
  return showCongratulations();
};

printScore = function() {
  return $('#congratulations-card .card ul li:first-child span').html(score + "pts");
};

printTimeleft = function() {
  return $('#congratulations-card .card ul li:nth-child(2) span').html(minutes + ":" + seconds + " (+" + scoreBonus + "pts)");
};

printMaxcombo = function() {
  return $('#congratulations-card .card ul li:nth-child(3) span').html(comboMax + " (+" + scoreCombomax + "pts)");
};

printTotalscore = function() {
  return $('#congratulations-card .card ul li:last-child span').html(scoreTotal + "pts");
};

showHome = function() {
  $('#overlay').fadeIn(0);
  $('#background_video').fadeIn(0);
  $('#main_content').fadeIn(0);
  return $('#footer').fadeIn(0);
};

hideHome = function() {
  $('#overlay').fadeOut(0);
  $('#background_video').fadeOut(0);
  $('#main_content').fadeOut(0);
  return $('#footer').fadeOut(0);
};

showGame = function() {
  $('#game-card').fadeIn(700);
  return $('#game-card-overlay').fadeIn(700);
};

hideGame = function() {
  $('#game-card').fadeOut(0);
  return $('#game-card-overlay').fadeOut(0);
};

gameOver = function() {
  $('#game-card').fadeOut(0);
  $('#game-card-overlay').fadeOut(0);
  $('#overlay').fadeIn(0);
  $('#background_video').fadeIn(0);
  return $('#main_content').fadeIn(0);
};

showCongratulations = function() {
  $('#congratulations-card').fadeIn(300);
  $('#congratulations-card .card').css('transform', 'scale(1)');
  printScore();
  printTimeleft();
  printMaxcombo();
  return printTotalscore();
};

hideCongratulations = function() {
  return $('#congratulations-card').fadeOut(300);
};

showRecords = function() {
  return $('#record-list').fadeIn(300);
};

hideRecords = function() {
  return $('#record-list').fadeOut(300);
};


/* -DEFINIENDO FUNCIONES COMPLEJAS- */

timeFunctions = function() {
  timeFuncionA();
  timeFuncionB();
  timeFuncionC();
  timeFuncionE();
  timeFuncionF();
  return timeFuncionG();
};

removeSeconds = function() {
  timeFunctions();
  return setTimeout(function() {
    return removeSeconds();
  }, 1000);
};

timer = function() {
  var results;
  results = [];
  while (true) {
    removeSeconds();
    break;
  }
  return results;
};

selectquestions = function() {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  question8();
  question9();
  return question10();
};

randomCard = function() {
  remove();
  return selectquestions();
};

generateRandom = function() {
  getValue();
  if (questionsAvailable.length === 0) {
    scoreUpdate();
    hideGame();
    return printResults();
  } else if (indexOf.call(questionsAvailable, value) >= 0) {
    randomCard();
    return console.log(questionsAvailable);
  } else {
    return generateRandom();
  }
};

generateGame = function() {
  generateRandom();
  generateCard();
  return checkCard();
};


/* -FUNCIONES COMPUESTAS- */

timeFuncionA = function() {
  if (seconds >= 60) {
    seconds -= 59;
    minutes += 1;
    return scoreUpdate();
  }
};

timeFuncionB = function() {
  if (seconds === 0 && minutes >= 1) {
    seconds += 60;
    minutes -= 1;
    return scoreUpdate();
  }
};

timeFuncionC = function() {
  if (seconds <= 0 && minutes <= 0) {
    $('.time-left span:first-child').html('');
    $('.time-left span:nth-child(2)').html('Agotado');
    $('.time-left span:last-child').html('');
    return gameOver();
  }
};

timeFuncionE = function() {
  seconds -= 1;
  return scoreUpdate();
};

timeFuncionF = function() {
  if (seconds <= 10 && minutes === 0) {
    $('.time-left').css('color', 'rgba(252, 61, 61, 0.70)');
    return scoreUpdate();
  } else {
    $('.time-left').css('color', 'white');
    return scoreUpdate();
  }
};

timeFuncionG = function() {
  if (score <= 0) {
    $('.score').css('color', 'rgba(252, 61, 61, 0.70)');
    return scoreUpdate();
  } else {
    $('.score').css('color', 'white');
    return scoreUpdate();
  }
};

scoreCheck = function() {
  if (answerSelected === answerCorrect) {
    addScore();
    scoreUpdate();
  }
  if (answerSelected !== answerCorrect) {
    quitScore();
    return scoreUpdate();
  }
};

checkAnswer = function() {
  if (answerSelected === answerCorrect) {
    confirmAble();
    return generateGame();
  } else {
    confirmDisable();
    return resetRadio();
  }
};


/* -DEFINIENDO FUNCIONES DE INTERACCIÓN- */

$('#play').click(function() {
  generateGame();
  timer();
  hideHome();
  return showGame();
});

$('#records').click(function() {
  hideHome();
  return showRecords();
});

$('#backhome').click(function() {
  hideRecords();
  return showHome();
});

$('#confirm').click(function() {
  scoreCheck();
  return checkAnswer();
});

$('#confirm').mouseup(function() {
  return buttonPushup();
});

$('#confirm').mousedown(function() {
  return buttonPushdown();
});

$('#incorrect').mouseup(function() {
  return buttonPushup();
});

$('#incorrect').mousedown(function() {
  return buttonPushdown();
});


/* -EJECUTANDO FUNCIONES INICIALES- */

hideGame();

hideCongratulations();

hideRecords();
