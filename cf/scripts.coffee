# Variables de preguntas
imgBackground = ''
imgPregunta = ''
pregunta = ''
respuestaA = ''
respuestaB = ''
respuestaC = ''
respuestaCorrecta = ''
respuestaSelecionada = ''
primerRespuesta = 2
preguntasDisponibles = [1, 2, 3]

resetRadio = ->
  $('#game-card input[type=radio]').prop( "checked", false )
  respuestaSelecionada = ''
  console.log 'se resetearon los valores checked de los campos y el valor correcto de las respuestas'

### BORRAR ITEM DE UN ARRAY!!!
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log array
# Crear una variable para asignarle el valor que será borrado ej: 3
valor = 3
# Crear una variable que ordenara el array poniendo el valor asignado al inicio de la misma
orden = array.indexOf(valor)
console.log orden
# Crear funcion que elimine del array el valor asignado
eliminar = ->
  array.splice(orden, 1);
  console.log array
###

valor = 0

pregunta1 = ->
  if valor == 1
    imgBackground = 'card-bg-1'
    imgPregunta = 'multimedia/header-1.jpg'
    pregunta = '¿Cuales de estas especies fueron utilizadas para modificar el ADN del Indominus-Rex?'
    respuestaA = 'Moscas, Arañas y Delfines'
    respuestaB = 'Calamares, Ranas y Raptores'
    respuestaC = 'Tiranosaurus-Rex, Largartijas y Camaleones'
    respuestaCorrecta = respuestaB
    resetRadio()

pregunta2 = ->
  if valor == 2
    imgBackground = 'card-bg-2'
    imgPregunta = 'multimedia/header-2.jpg'
    pregunta = '¿Como se llama el escritor de la novela "Parque Jurásico"?'
    respuestaA = 'Michael Crichton'
    respuestaB = 'Steven Spielberg'
    respuestaC = 'Colin Trevorrow'
    respuestaCorrecta = respuestaA
    resetRadio()

pregunta3 = ->
  if valor == 3
    imgBackground = 'card-bg-3'
    imgPregunta = 'multimedia/header-3.jpg'
    pregunta = '¿Que dinosaurio derrota al T-Rex en Jurassic Park 3?'
    respuestaA = 'Carcharodontosaurus'
    respuestaB = 'Suchomimus'
    respuestaC = 'Spinosaurus'
    respuestaCorrecta = respuestaC
    resetRadio()

randomCard = ->
    eliminar()
    selecionarPreguntas()

selecionarPreguntas = ->
  pregunta1()
  pregunta2()
  pregunta3()

obtenerIndice = ->
  preguntasDisponibles.indexOf(valor)
eliminar = ->
  obtenerIndice()
  preguntasDisponibles.splice(obtenerIndice(), 1);

generarRandom = ->
  valor = Math.floor(Math.random() * 3 + 1)
  console.log valor
  console.log preguntasDisponibles
  if preguntasDisponibles.length == 0
    alert 'el array está vacio'
  else if valor in preguntasDisponibles
    randomCard()
    console.log preguntasDisponibles
  else
    generarRandom()


###
randomCard = ->
  x = Math.floor(Math.random() * 3 + 1)
  if x == 1
    pregunta1()
  else if x == 2
    pregunta2()
  else
    pregunta3()
###

# Armado del DOM en card
generarCard = ->
  $('.question-header img').attr('src', imgPregunta)
  $('#game-card-overlay').removeClass('card-bg-1').removeClass('card-bg-2').removeClass('card-bg-3')
  $('#game-card-overlay').addClass(imgBackground)
  $('.question').html(pregunta)
  $('.answers > label:nth-child(2) > p').html(respuestaA)
  $('.answers > label:nth-child(4) > p').html(respuestaB)
  $('.answers > label:nth-child(6) > p').html(respuestaC)

# Checkeo de respuesta correcta
checkCard = ->
  $('.answers label:nth-child(2)').click ->
    respuestaSelecionada = respuestaA
    $('#confirm').prop( "disabled", false )
  $('.answers label:nth-child(4)').click ->
    respuestaSelecionada = respuestaB
    $('#confirm').prop( "disabled", false )
  $('.answers label:nth-child(6)').click ->
    respuestaSelecionada = respuestaC
    $('#confirm').prop( "disabled", false )

# Generar card
cardGame = ->
  generarRandom()
  generarCard()
  checkCard()

mostrarInicio = ->
  $('#overlay').fadeIn(0)
  $('#background_video').fadeIn(0)
  $('#main_content').fadeIn(0)

ocultarInicio = ->
  $('#overlay').fadeOut(0)
  $('#background_video').fadeOut(0)
  $('#main_content').fadeOut(0)

mostrarJuego = ->
  $('#game-card').fadeIn(700)
  $('#game-card-overlay').fadeIn(700)

ocultarJuego = ->
  $('#game-card').fadeOut(0)
  $('#game-card-overlay').fadeOut(0)

gameOver = ->
  $('#game-card').fadeOut(0)
  $('#game-card-overlay').fadeOut(0)
  $('#overlay').fadeIn(0)
  $('#background_video').fadeIn(0)
  $('#main_content').fadeIn(0)

### RECURSIVIDAD!!!
ping = ->
  console.log "Pinged"
  setTimeout ->
    ping()
  , 1000

ping()

###

# Funcion de puntos
puntos = 0
$('#confirm').click ->
  primerRespuesta -= 0
  if respuestaSelecionada == respuestaCorrecta
    segundos += 2
    puntos += 100
    $('.score span:first-child').html(puntos)
  else if respuestaSelecionada != respuestaCorrecta and primerRespuesta <= 0
    console.log primerRespuesta
    console.log 'se resto segundos'
    segundos -= 5
    puntos -= 50
    $('.score span:first-child').html(puntos)

# Funcion de tiempo
tiempo = 800
minutos = Math.floor(tiempo / 60)
segundos = tiempo % 60

restarSegundos = ->
  if segundos >= 61
    segundos -= 60
    minutos +=1
    $('.time-left span:first-child').html(minutos)
    $('.time-left span:last-child').html(segundos)
  else if segundos == 0 and minutos >= 1
    segundos += 60
    minutos -= 1
    $('.time-left span:first-child').html(minutos)
    $('.time-left span:last-child').html(segundos)
  else if segundos <= 0 and minutos <= 0
    $('.time-left span:first-child').html('')
    $('.time-left span:nth-child(2)').html('Agotado')
    $('.time-left span:last-child').html('')
    gameOver()
  else
    segundos -= 1
    $('.time-left span:first-child').html(minutos)
    $('.time-left span:last-child').html(segundos)
    setTimeout ->
      restarSegundos()
    , 1000
  if segundos <= 10 and minutos == 0
    $('.time-left').css('color', 'rgba(252, 61, 61, 0.70)')
    $('.time-left span:first-child').html(minutos)
    $('.time-left span:last-child').html(segundos)
  else
    $('.time-left').css('color', 'white')
    $('.time-left span:first-child').html(minutos)
    $('.time-left span:last-child').html(segundos)
  if puntos <= 0
    $('.score').css('color', 'rgba(252, 61, 61, 0.70)')
    $('.score span:first-child').html(puntos)
  else
    $('.score').css('color', 'white')
    $('.score span:first-child').html(puntos)

# temporizador
temporizador = ->
  loop
    restarSegundos()
    break

ocultarJuego()

$('#jugar').click ->
  cardGame()
  temporizador()
  ocultarInicio()
  mostrarJuego()

$('#confirm').click ->
  if respuestaSelecionada == respuestaCorrecta
    console.log 'correcto'
    $('#confirm').prop( "disabled", false )
    cardGame()
  else
    $('#confirm').prop( "disabled", true )
    console.log 'respuesta incorrecta'
    resetRadio()
