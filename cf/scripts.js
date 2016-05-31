
/*
respuesta1 = "tornasol"
respuesta2 = "rabanasta"
respuesta3 = "fran"
chances = 3

quitarChance = ->
  alert "Respuesta incorrecta intentalo nuevamente =("
  chances -= 1
  alert "has gastado una chance, te quedan #{chances}."

respuestaCorrecta = ->
  alert "¡Felicitaciones, respuesta correcta!"

gameOver = ->
  if chances <= 0
    alert "Fin del juego. Te has quedado sin chances."
    location.reload();

congratulations = ->
  if pregunta1 == respuesta1 and pregunta2 == respuesta2 and pregunta3 == respuesta3
    alert "¡Has respondido todas las preguntas correctamente!"

loop
  pregunta1 = prompt("¿Cual es el nombre de la espada mas poderosa en Final Fantasy XII?").toLowerCase()
  if pregunta1 == respuesta1
    respuestaCorrecta()
    break
  else
    quitarChance()
    gameOver()

loop
  pregunta2 = prompt("¿Cual es el nombre de la ciudad donde se inicia el juego?").toLowerCase()
  if pregunta2 == respuesta2
    respuestaCorrecta()
    break
  else
    quitarChance()
    gameOver()

loop
  pregunta3 = prompt("¿Cual de tus personajes reacciona ante el poder que emanan las \"magicitas\"?").toLowerCase()
  if pregunta3 == respuesta3
    respuestaCorrecta()
    break
  else
    quitarChance()
    gameOver()

congratulations()
 */

