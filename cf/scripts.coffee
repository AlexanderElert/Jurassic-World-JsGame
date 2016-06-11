### -DEFINIENDO VARIABLES INICIALES- ###
imgBackground = ''
imgquestion = ''
question = ''
answerA = ''
answerB = ''
answerC = ''
answerCorrect = ''
answerSelected = ''
questionsAvailable = [1, 2, 3]
value = 0
score = 0
scoreBonus = 0
scoreCombomax = 0
scoreTotal = 0
combo = 0
comboMax = 0
time = 180
minutes = Math.floor(time / 60)
seconds = time % 60

### -DEFINIENDO PREGUNTAS- ###
question1 = ->
  if value == 1
    imgBackground = 'card-bg-1'
    imgquestion = 'multimedia/header-1.jpg'
    question = '¿Cuales de estas especies fueron utilizadas para modificar el ADN del Indominus-Rex?'
    answerA = 'Moscas, Arañas y Delfines'
    answerB = 'Calamares, Ranas y Raptores'
    answerC = 'Tiranosaurus-Rex, Largartijas y Camaleones'
    answerCorrect = answerB
    resetRadio()

question2 = ->
  if value == 2
    imgBackground = 'card-bg-2'
    imgquestion = 'multimedia/header-2.jpg'
    question = '¿Como se llama el escritor de la novela "Parque Jurásico"?'
    answerA = 'Michael Crichton'
    answerB = 'Steven Spielberg'
    answerC = 'Colin Trevorrow'
    answerCorrect = answerA
    resetRadio()

question3 = ->
  if value == 3
    imgBackground = 'card-bg-3'
    imgquestion = 'multimedia/header-3.jpg'
    question = '¿Que dinosaurio derrota al T-Rex en Jurassic Park 3?'
    answerA = 'Carcharodontosaurus'
    answerB = 'Suchomimus'
    answerC = 'Spinosaurus'
    answerCorrect = answerC
    resetRadio()

# -DEFINIENDO FUNCIONES BÁSICAS- ###
# Armado del DOM en Card
getValue = ->
  value = Math.floor(Math.random() * 3 + 1)
  console.log value
  console.log questionsAvailable

getIndex = ->
  questionsAvailable.indexOf(value)

remove = ->
  getIndex()
  questionsAvailable.splice(getIndex(), 1);

generateCard = ->
  $('.question-header img').attr('src', imgquestion)
  $('#game-card-overlay').removeClass('card-bg-1').removeClass('card-bg-2').removeClass('card-bg-3')
  $('#game-card-overlay').addClass(imgBackground)
  $('.question').html(question)
  $('.answers > label:nth-child(2) > p').html(answerA)
  $('.answers > label:nth-child(4) > p').html(answerB)
  $('.answers > label:nth-child(6) > p').html(answerC)

scoreUpdate = ->
  $('.time-left span:first-child').html(minutes)
  $('.time-left span:last-child').html(seconds)
  $('.score span:first-child').html(score)

hideCongratulations = ->
  $('#congratulations-card').fadeOut(100)

# Checkeo de respuesta correcta
checkCard = ->
  $('.answers label:nth-child(2)').click ->
    answerSelected = answerA
    confirmAble()
  $('.answers label:nth-child(4)').click ->
    answerSelected = answerB
    confirmAble()
  $('.answers label:nth-child(6)').click ->
    answerSelected = answerC
    confirmAble()

addScore = ->
  seconds += 2
  score += 1000
  combo += 1
  if combo >= comboMax
    comboMax = combo
  console.log 'combo Maximo =',comboMax

quitScore = ->
  score -= 500
  combo = 0
  console.log 'se quitaron 500pts por errar la resp'

scoreCalculate = ->
  scoreBonus = (minutes * 1200) + (seconds * 20)
  scoreCombomax = comboMax * 1000
  scoreTotal = score + scoreBonus

resetRadio = ->
  $('#game-card input[type=radio]').prop( "checked", false )
  answerSelected = ''
  console.log 'se resetearon los input checkeados y el valor correcto de las respuestas'

hideConfirm = ->
  $('#confirm').fadeOut(0)
  $('#incorrect').fadeIn(0)
showConfirm = ->
  $('#incorrect').fadeOut(0)
  $('#confirm').fadeIn(0)

confirmAble = ->
  console.log 'correcto'
  $('#confirm').prop( "disabled", false )
  $('#confirm').html( 'Siguiente' )
  $('#confirm').fadeIn(0)
  showConfirm()

confirmDisable = ->
  console.log 'respuesta incorrecta'
  $('#confirm').prop( "disabled", true )
  $('#confirm').html( 'Respuesta incorrecta' )
  hideConfirm()

buttonPushdown = ->
  $('#confirm').css('transform', 'scale(0.9)')
  $('#confirm').css('transition', '0.1s ease-in')
  $('#incorrect').css('transform', 'scale(0.9)')
  $('#incorrect').css('transition', '0.1s ease-in')

buttonPushup = ->
  $('#confirm').css('transform', 'scale(1)')
  $('#confirm').css('transition', '0.2s ease-out')
  $('#incorrect').css('transform', 'scale(1)')
  $('#incorrect').css('transition', '0.2s ease-out')

printResults = ->
  scoreCalculate()
  showCongratulations()

printScore = ->
  $('#congratulations-card .card ul li:first-child span').html(score + "pts")

printTimeleft = ->
  $('#congratulations-card .card ul li:nth-child(2) span').html(minutes + ":" + seconds + " (+" + scoreBonus + "pts)")

printMaxcombo = ->
  $('#congratulations-card .card ul li:nth-child(3) span').html(comboMax + " (+" + scoreCombomax + "pts)")

printTotalscore = ->
  $('#congratulations-card .card ul li:last-child span').html(scoreTotal + "pts")

# Mostrar/Ocultar secciones
showHome = ->
  $('#overlay').fadeIn(0)
  $('#background_video').fadeIn(0)
  $('#main_content').fadeIn(0)

hideHome = ->
  $('#overlay').fadeOut(0)
  $('#background_video').fadeOut(0)
  $('#main_content').fadeOut(0)

showGame = ->
  $('#game-card').fadeIn(700)
  $('#game-card-overlay').fadeIn(700)

hideGame = ->
  $('#game-card').fadeOut(0)
  $('#game-card-overlay').fadeOut(0)

gameOver = ->
  $('#game-card').fadeOut(0)
  $('#game-card-overlay').fadeOut(0)
  $('#overlay').fadeIn(0)
  $('#background_video').fadeIn(0)
  $('#main_content').fadeIn(0)

showCongratulations = ->
  $('#congratulations-card').fadeIn(300)
  $('#congratulations-card .card').css('transform', 'scale(1)')
  printScore()
  printTimeleft()
  printMaxcombo()
  printTotalscore()

### -DEFINIENDO FUNCIONES COMPLEJAS- ###
# Temporizador
timeFunctions = ->
  timeFuncionA()
  timeFuncionB()
  timeFuncionC()
  timeFuncionE()
  timeFuncionF()
  timeFuncionG()

removeSeconds = ->
  timeFunctions()
  setTimeout ->
    removeSeconds()
  , 1000

timer = ->
  loop
    removeSeconds()
    break

# Generar Carta
selectquestions = ->
  question1()
  question2()
  question3()

randomCard = ->
    remove()
    selectquestions()

generateRandom = ->
  getValue()
  if questionsAvailable.length == 0
    scoreUpdate()
    hideGame()
    printResults()
  else if value in questionsAvailable
    randomCard()
    console.log questionsAvailable
  else
    generateRandom()

generateGame = ->
  generateRandom()
  generateCard()
  checkCard()

### -FUNCIONES COMPUESTAS- ###
# Configuración del tiempo
timeFuncionA = ->
  if seconds >= 60
    seconds -= 59
    minutes +=1
    scoreUpdate()

timeFuncionB = ->
  if seconds == 0 and minutes >= 1
    seconds += 60
    minutes -= 1
    scoreUpdate()

timeFuncionC = ->
  if seconds <= 0 and minutes <= 0
    $('.time-left span:first-child').html('')
    $('.time-left span:nth-child(2)').html('Agotado')
    $('.time-left span:last-child').html('')
    gameOver()

timeFuncionE = ->
  seconds -= 1
  scoreUpdate()

timeFuncionF = ->
  if seconds <= 10 and minutes == 0
    $('.time-left').css('color', 'rgba(252, 61, 61, 0.70)')
    scoreUpdate()
  else
    $('.time-left').css('color', 'white')
    scoreUpdate()

timeFuncionG = ->
  if score <= 0
    $('.score').css('color', 'rgba(252, 61, 61, 0.70)')
    scoreUpdate()
  else
    $('.score').css('color', 'white')
    scoreUpdate()

# Configuracion de los puntos

scoreCheck = ->
  if answerSelected == answerCorrect
    addScore()
    scoreUpdate()
  if answerSelected != answerCorrect
    quitScore()
    scoreUpdate()

# Configuración de interfaz
checkAnswer = ->
  if answerSelected == answerCorrect
    confirmAble()
    generateGame()
  else
    confirmDisable()
    resetRadio()

### -DEFINIENDO FUNCIONES DE INTERACCIÓN- ###
$('#play').click ->
  generateGame()
  timer()
  hideHome()
  showGame()

$('#confirm').click ->
  scoreCheck()
  checkAnswer()

$('#confirm').mouseup ->
  buttonPushup()

$('#confirm').mousedown ->
  buttonPushdown()

$('#incorrect').mouseup ->
  buttonPushup()

$('#incorrect').mousedown ->
  buttonPushdown()

### -EJECUTANDO FUNCIONES INICIALES- ###
hideGame()
hideCongratulations()
