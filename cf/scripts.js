
/* -DEFINIENDO VARIABLES INICIALES- */
var addNewrecord, addRecord, addScore, answerA, answerB, answerC, answerCorrect, answerSelected, buttonPushdown, buttonPushup, checkAnswer, checkCard, combo, comboMax, confirmAble, confirmDisable, gameOver, generateCard, generateGame, generateRandom, getIndex, getValue, hideConfirm, hideCongratulations, hideGame, hideHome, hideNewrecord, hideRecords, ifNewrecord, imgBackground, imgquestion, minutes, printMaxcombo, printRecord, printResults, printScore, printTimeleft, printTotalscore, question, question1, question10, question2, question3, question4, question5, question6, question7, question8, question9, questionsAvailable, quitScore, randomCard, record, recordCounter, recordsList, remove, removeBackgrounds, removeSeconds, removeSecondstatus, reset, resetRadio, resetValues, score, scoreBonus, scoreCalculate, scoreCheck, scoreCombomax, scoreTotal, scoreUpdate, seconds, selectquestions, shortRecords, showConfirm, showCongratulations, showGame, showHome, showNewrecord, showRecords, time, timeFuncionA, timeFuncionB, timeFuncionC, timeFuncionE, timeFuncionF, timeFuncionG, timeFunctions, timeLeftzero, timer, value,
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

removeSecondstatus = "Off";


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
    question = 'Which species were used to modify the DNA of Indominus-Rex?';
    answerA = 'Flies, spiders and Dolphins';
    answerB = 'Squids, Frogs and Raptors';
    answerC = 'Tiranosaurus-Rex, Geckos and chameleons';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question2 = function() {
  if (value === 2) {
    imgBackground = 'card-bg-2';
    imgquestion = 'multimedia/header-2.jpg';
    question = 'How\'s called the writer of the novel "Jurassic Park"?';
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
    question = 'How it\'s called the dinosaur who defeated the Tiranosaurus-Rex in Jurassic Park 3?';
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
    question = 'What\'s the name of the giant sea creature exhibited in the park?';
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
    question = 'What\'s strategy that Owen applied to hide himself from the Indominus-Rex?';
    answerA = 'He covered his body with foliage';
    answerB = 'He sprayed his body with gasoline';
    answerC = 'He stayed completely still';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question6 = function() {
  if (value === 6) {
    imgBackground = 'card-bg-6';
    imgquestion = 'multimedia/header-6.jpg';
    question = 'What are the names of the raptors trained by Owen?';
    answerA = 'Blue, Charlie, Echo and Delta';
    answerB = 'Alfa, Beta, Omega and Zeta';
    answerC = 'Alfa, Blue, Charlie and Delta';
    answerCorrect = answerA;
    return resetRadio();
  }
};

question7 = function() {
  if (value === 7) {
    imgBackground = 'card-bg-7';
    imgquestion = 'multimedia/header-7.jpg';
    question = 'How it\'s called the rounded vehicle used at the attractions?';
    answerA = 'Cyclesphere';
    answerB = 'Rotatinglobe';
    answerC = 'Gyrosphere';
    answerCorrect = answerC;
    return resetRadio();
  }
};

question8 = function() {
  if (value === 8) {
    imgBackground = 'card-bg-8';
    imgquestion = 'multimedia/header-8.jpg';
    question = 'How it\'s called the flying dinosaur with a head like a raptor?';
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
    question = 'Why the security division couldn\'t track down the Indominus-Rex?';
    answerA = 'Due to an electrical fault in the sensor';
    answerB = 'The Indominus-Rex pulled out from itself';
    answerC = 'It was too far from the control towers';
    answerCorrect = answerB;
    return resetRadio();
  }
};

question10 = function() {
  if (value === 10) {
    imgBackground = 'card-bg-10';
    imgquestion = 'multimedia/header-10.jpg';
    question = 'What\'s Claire\'s Dearing job?';
    answerA = 'Operations manager';
    answerB = 'Owner of Jurassic World';
    answerC = 'InGen security boss';
    answerCorrect = answerA;
    return resetRadio();
  }
};

addRecord = function() {
  var earnedPoints, enteredNickname;
  enteredNickname = $('#new-record input').val();
  earnedPoints = scoreTotal;
  record = {
    name: "" + enteredNickname,
    points: earnedPoints
  };
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
  $('#record-list .card p ul').remove();
  $('#record-list .card p').append("<ul></ul>");
  results = [];
  for (i = 0, len = recordsList.length; i < len; i++) {
    record = recordsList[i];
    $('#record-list .card p ul').append("<li> <span>" + record.name + "</span> <span>" + record.points + "pts</span></li>");
    recordCounter += 1;
    if (recordCounter >= 11) {
      $('#record-list .card ul li:last-child').remove();
    }
    results.push(recordCounter = 0);
  }
  return results;
};

getValue = function() {
  return value = Math.floor(Math.random() * 10 + 1);
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
    return comboMax = combo;
  }
};

quitScore = function() {
  score -= 500;
  return combo = 0;
};

scoreCalculate = function() {
  scoreBonus = (minutes * 1200) + (seconds * 20);
  scoreCombomax = comboMax * 1000;
  return scoreTotal = score + scoreBonus;
};

resetRadio = function() {
  $('#game-card input[type=radio]').prop("checked", false);
  return answerSelected = '';
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
  $('#confirm').html('Next');
  $('#confirm').fadeIn(0);
  return showConfirm();
};

confirmDisable = function() {
  $('#confirm').prop("disabled", true);
  $('#confirm').html('Wrong answer');
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

showNewrecord = function() {
  return $('#new-record').fadeIn(300);
};

hideNewrecord = function() {
  return $('#new-record').fadeOut(300);
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
  removeSecondstatus = "On";
  return setTimeout(function() {
    return removeSeconds();
  }, 1000);
};

timer = function() {
  var results;
  if (removeSecondstatus === "Off") {
    results = [];
    while (true) {
      removeSeconds();
      break;
    }
    return results;
  }
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
    return randomCard();
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

timeLeftzero = function() {
  $('.time-left span:first-child').html('00');
  $('.time-left span:nth-child(2)').html(':');
  return $('.time-left span:last-child').html('00');
};

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
    timeLeftzero();
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
  timeLeftzero();
  time = 180;
  resetValues();
  hideCongratulations();
  generateGame();
  timer();
  hideHome();
  return showGame();
});

$('#records').click(function() {
  hideHome();
  shortRecords();
  printRecord();
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

$('#retry').click(function() {
  hideCongratulations();
  hideHome();
  generateGame();
  timer();
  return showGame();
});

$('#nextRecord').click(function() {
  ifNewrecord();
  hideCongratulations();
  return hideGame();
});

$('#nextNewrecord').click(function() {
  addNewrecord();
  return reset();
});


/* -EJECUTANDO FUNCIONES INICIALES- */

hideGame();

hideCongratulations();

hideRecords();

hideNewrecord();

ifNewrecord = function() {
  var lowerRecord;
  shortRecords();
  lowerRecord = recordsList[9].points;
  if (scoreTotal >= lowerRecord) {
    recordsList.splice(9, 1);
    return showNewrecord();
  } else {
    hideCongratulations();
    return showHome();
  }
};

addNewrecord = function() {
  addRecord();
  shortRecords();
  showRecords();
  hideNewrecord();
  return printRecord();
};

resetValues = function() {
  minutes = Math.floor(time / 60);
  seconds = time % 60;
  questionsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  value = 0;
  score = 0;
  scoreBonus = 0;
  scoreCombomax = 0;
  scoreTotal = 0;
  combo = 0;
  return comboMax = 0;
};

reset = function() {
  time = 0;
  resetValues();
  hideGame();
  hideCongratulations();
  return hideNewrecord();
};
