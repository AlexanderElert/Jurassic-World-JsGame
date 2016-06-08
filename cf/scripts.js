var cardGame, checkCard, eliminar, gameOver, generarCard, generarRandom, imgBackground, imgPregunta, minutos, mostrarInicio, mostrarJuego, obtenerIndice, ocultarInicio, ocultarJuego, pregunta, pregunta1, pregunta2, pregunta3, preguntasDisponibles, primerRespuesta, puntos, randomCard, resetRadio, respuestaA, respuestaB, respuestaC, respuestaCorrecta, respuestaSelecionada, restarSegundos, segundos, selecionarPreguntas, temporizador, tiempo, valor,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

imgBackground = '';

imgPregunta = '';

pregunta = '';

respuestaA = '';

respuestaB = '';

respuestaC = '';

respuestaCorrecta = '';

respuestaSelecionada = '';

primerRespuesta = 2;

preguntasDisponibles = [1, 2, 3];

resetRadio = function() {
  $('#game-card input[type=radio]').prop("checked", false);
  respuestaSelecionada = '';
  return console.log('se resetearon los valores checked de los campos y el valor correcto de las respuestas');
};


/* BORRAR ITEM DE UN ARRAY!!!
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log array
 * Crear una variable para asignarle el valor que será borrado ej: 3
valor = 3
 * Crear una variable que ordenara el array poniendo el valor asignado al inicio de la misma
orden = array.indexOf(valor)
console.log orden
 * Crear funcion que elimine del array el valor asignado
eliminar = ->
  array.splice(orden, 1);
  console.log array
 */

valor = 0;

pregunta1 = function() {
  if (valor === 1) {
    imgBackground = 'card-bg-1';
    imgPregunta = 'multimedia/header-1.jpg';
    pregunta = '¿Cuales de estas especies fueron utilizadas para modificar el ADN del Indominus-Rex?';
    respuestaA = 'Moscas, Arañas y Delfines';
    respuestaB = 'Calamares, Ranas y Raptores';
    respuestaC = 'Tiranosaurus-Rex, Largartijas y Camaleones';
    respuestaCorrecta = respuestaB;
    return resetRadio();
  }
};

pregunta2 = function() {
  if (valor === 2) {
    imgBackground = 'card-bg-2';
    imgPregunta = 'multimedia/header-2.jpg';
    pregunta = '¿Como se llama el escritor de la novela "Parque Jurásico"?';
    respuestaA = 'Michael Crichton';
    respuestaB = 'Steven Spielberg';
    respuestaC = 'Colin Trevorrow';
    respuestaCorrecta = respuestaA;
    return resetRadio();
  }
};

pregunta3 = function() {
  if (valor === 3) {
    imgBackground = 'card-bg-3';
    imgPregunta = 'multimedia/header-3.jpg';
    pregunta = '¿Que dinosaurio derrota al T-Rex en Jurassic Park 3?';
    respuestaA = 'Carcharodontosaurus';
    respuestaB = 'Suchomimus';
    respuestaC = 'Spinosaurus';
    respuestaCorrecta = respuestaC;
    return resetRadio();
  }
};

randomCard = function() {
  eliminar();
  return selecionarPreguntas();
};

selecionarPreguntas = function() {
  pregunta1();
  pregunta2();
  return pregunta3();
};

obtenerIndice = function() {
  return preguntasDisponibles.indexOf(valor);
};

eliminar = function() {
  obtenerIndice();
  return preguntasDisponibles.splice(obtenerIndice(), 1);
};

generarRandom = function() {
  valor = Math.floor(Math.random() * 3 + 1);
  console.log(valor);
  console.log(preguntasDisponibles);
  if (preguntasDisponibles.length === 0) {
    return alert('el array está vacio');
  } else if (indexOf.call(preguntasDisponibles, valor) >= 0) {
    randomCard();
    return console.log(preguntasDisponibles);
  } else {
    return generarRandom();
  }
};


/*
randomCard = ->
  x = Math.floor(Math.random() * 3 + 1)
  if x == 1
    pregunta1()
  else if x == 2
    pregunta2()
  else
    pregunta3()
 */

generarCard = function() {
  $('.question-header img').attr('src', imgPregunta);
  $('#game-card-overlay').removeClass('card-bg-1').removeClass('card-bg-2').removeClass('card-bg-3');
  $('#game-card-overlay').addClass(imgBackground);
  $('.question').html(pregunta);
  $('.answers > label:nth-child(2) > p').html(respuestaA);
  $('.answers > label:nth-child(4) > p').html(respuestaB);
  return $('.answers > label:nth-child(6) > p').html(respuestaC);
};

checkCard = function() {
  $('.answers label:nth-child(2)').click(function() {
    respuestaSelecionada = respuestaA;
    return $('#confirm').prop("disabled", false);
  });
  $('.answers label:nth-child(4)').click(function() {
    respuestaSelecionada = respuestaB;
    return $('#confirm').prop("disabled", false);
  });
  return $('.answers label:nth-child(6)').click(function() {
    respuestaSelecionada = respuestaC;
    return $('#confirm').prop("disabled", false);
  });
};

cardGame = function() {
  generarRandom();
  generarCard();
  return checkCard();
};

mostrarInicio = function() {
  $('#overlay').fadeIn(0);
  $('#background_video').fadeIn(0);
  return $('#main_content').fadeIn(0);
};

ocultarInicio = function() {
  $('#overlay').fadeOut(0);
  $('#background_video').fadeOut(0);
  return $('#main_content').fadeOut(0);
};

mostrarJuego = function() {
  $('#game-card').fadeIn(700);
  return $('#game-card-overlay').fadeIn(700);
};

ocultarJuego = function() {
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


/* RECURSIVIDAD!!!
ping = ->
  console.log "Pinged"
  setTimeout ->
    ping()
  , 1000

ping()
 */

puntos = 0;

$('#confirm').click(function() {
  primerRespuesta -= 0;
  if (respuestaSelecionada === respuestaCorrecta) {
    segundos += 2;
    puntos += 100;
    return $('.score span:first-child').html(puntos);
  } else if (respuestaSelecionada !== respuestaCorrecta && primerRespuesta <= 0) {
    console.log(primerRespuesta);
    console.log('se resto segundos');
    segundos -= 5;
    puntos -= 50;
    return $('.score span:first-child').html(puntos);
  }
});

tiempo = 800;

minutos = Math.floor(tiempo / 60);

segundos = tiempo % 60;

restarSegundos = function() {
  if (segundos >= 61) {
    segundos -= 60;
    minutos += 1;
    $('.time-left span:first-child').html(minutos);
    $('.time-left span:last-child').html(segundos);
  } else if (segundos === 0 && minutos >= 1) {
    segundos += 60;
    minutos -= 1;
    $('.time-left span:first-child').html(minutos);
    $('.time-left span:last-child').html(segundos);
  } else if (segundos <= 0 && minutos <= 0) {
    $('.time-left span:first-child').html('');
    $('.time-left span:nth-child(2)').html('Agotado');
    $('.time-left span:last-child').html('');
    gameOver();
  } else {
    segundos -= 1;
    $('.time-left span:first-child').html(minutos);
    $('.time-left span:last-child').html(segundos);
    setTimeout(function() {
      return restarSegundos();
    }, 1000);
  }
  if (segundos <= 10 && minutos === 0) {
    $('.time-left').css('color', 'rgba(252, 61, 61, 0.70)');
    $('.time-left span:first-child').html(minutos);
    $('.time-left span:last-child').html(segundos);
  } else {
    $('.time-left').css('color', 'white');
    $('.time-left span:first-child').html(minutos);
    $('.time-left span:last-child').html(segundos);
  }
  if (puntos <= 0) {
    $('.score').css('color', 'rgba(252, 61, 61, 0.70)');
    return $('.score span:first-child').html(puntos);
  } else {
    $('.score').css('color', 'white');
    return $('.score span:first-child').html(puntos);
  }
};

temporizador = function() {
  var results;
  results = [];
  while (true) {
    restarSegundos();
    break;
  }
  return results;
};

ocultarJuego();

$('#jugar').click(function() {
  cardGame();
  temporizador();
  ocultarInicio();
  return mostrarJuego();
});

$('#confirm').click(function() {
  if (respuestaSelecionada === respuestaCorrecta) {
    console.log('correcto');
    $('#confirm').prop("disabled", false);
    return cardGame();
  } else {
    $('#confirm').prop("disabled", true);
    console.log('respuesta incorrecta');
    return resetRadio();
  }
});
