### -DEFINIENDO VARIABLES INICIALES- ###
imgBackground = ''
imgquestion = ''
question = ''
answerA = ''
answerB = ''
answerC = ''
answerCorrect = ''
answerSelected = ''
questionsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
removeSecondstatus = "Off"

### -DEFINIENDO LISTA DE RECORDS- ###
recordsList = [
  record = {
    name: "AlexMurió"
    points: 13200
  }
  record = {
    name: "AlphaProteus"
    points: 13900
  }
  record = {
    name: "Httpxsojin"
    points: 13500
  }
  record = {
    name: "KingBehemoth"
    points: 12900
  }
  record = {
    name: "MaritoBaracus"
    points: 13400
  }
  record = {
    name: "RubiusOMG"
    points: 12700
  }
  record = {
    name: "ElMaestrulli"
    points: 12300
  }
  record = {
    name: "ORION"
    points: 11900
  }
  record = {
    name: "PepaPig"
    points: 11600
  }
  record = {
    name: "Vegeta777"
    points: 11100
  }
]

### -DEFINIENDO PREGUNTAS- ###
question1 = ->
  if value == 1
    imgBackground = 'card-bg-1'
    imgquestion = 'multimedia/header-1.jpg'
    question = 'Which species were used to modify the DNA of Indominus-Rex?'
    answerA = 'Flies, spiders and Dolphins'
    answerB = 'Squids, Frogs and Raptors'
    answerC = 'Tiranosaurus-Rex, Geckos and chameleons'
    answerCorrect = answerB
    resetRadio()

question2 = ->
  if value == 2
    imgBackground = 'card-bg-2'
    imgquestion = 'multimedia/header-2.jpg'
    question = 'How\'s called the writer of the novel "Jurassic Park"?'
    answerA = 'Michael Crichton'
    answerB = 'Steven Spielberg'
    answerC = 'Colin Trevorrow'
    answerCorrect = answerA
    resetRadio()

question3 = ->
  if value == 3
    imgBackground = 'card-bg-3'
    imgquestion = 'multimedia/header-3.jpg'
    question = 'How it\'s called the dinosaur who defeated the Tiranosaurus-Rex in Jurassic Park 3?'
    answerA = 'Carcharodontosaurus'
    answerB = 'Suchomimus'
    answerC = 'Spinosaurus'
    answerCorrect = answerC
    resetRadio()

question4 = ->
  if value == 4
    imgBackground = 'card-bg-4'
    imgquestion = 'multimedia/header-4.jpg'
    question = 'What\'s the name of the giant sea creature exhibited in the park?'
    answerA = 'Mosasaurus'
    answerB = 'Megalodón'
    answerC = 'Tylosaurus'
    answerCorrect = answerA
    resetRadio()

question5 = ->
  if value == 5
    imgBackground = 'card-bg-5'
    imgquestion = 'multimedia/header-5.jpg'
    question = 'What\'s strategy that Owen applied to hide himself from the Indominus-Rex?'
    answerA = 'He covered his body with foliage'
    answerB = 'He sprayed his body with gasoline'
    answerC = 'He stayed completely still'
    answerCorrect = answerB
    resetRadio()

question6 = ->
  if value == 6
    imgBackground = 'card-bg-6'
    imgquestion = 'multimedia/header-6.jpg'
    question = 'What are the names of the raptors trained by Owen?'
    answerA = 'Blue, Charlie, Echo and Delta'
    answerB = 'Alfa, Beta, Omega and Zeta'
    answerC = 'Alfa, Blue, Charlie and Delta'
    answerCorrect = answerA
    resetRadio()

question7 = ->
  if value == 7
    imgBackground = 'card-bg-7'
    imgquestion = 'multimedia/header-7.jpg'
    question = 'How it\'s called the rounded vehicle used at the attractions?'
    answerA = 'Cyclesphere'
    answerB = 'Rotatinglobe'
    answerC = 'Gyrosphere'
    answerCorrect = answerC
    resetRadio()

question8 = ->
  if value == 8
    imgBackground = 'card-bg-8'
    imgquestion = 'multimedia/header-8.jpg'
    question = 'How it\'s called the flying dinosaur with a head like a raptor?'
    answerA = 'Pteranodon'
    answerB = 'Dimorphodon'
    answerC = 'Microceratus'
    answerCorrect = answerB
    resetRadio()

question9 = ->
  if value == 9
    imgBackground = 'card-bg-9'
    imgquestion = 'multimedia/header-9.jpg'
    question = 'Why the security division couldn\'t track down the Indominus-Rex?'
    answerA = 'Due to an electrical fault in the sensor'
    answerB = 'The Indominus-Rex pulled out from itself'
    answerC = 'It was too far from the control towers'
    answerCorrect = answerB
    resetRadio()

question10 = ->
  if value == 10
    imgBackground = 'card-bg-10'
    imgquestion = 'multimedia/header-10.jpg'
    question = 'What\'s Claire\'s Dearing job?'
    answerA = 'Operations manager'
    answerB = 'Owner of Jurassic World'
    answerC = 'InGen security boss'
    answerCorrect = answerA
    resetRadio()

# -DEFINIENDO FUNCIONES BÁSICAS- ###
# Armando el DOM en Records
addRecord = ->
  enteredNickname = $('#new-record input').val()
  earnedPoints = scoreTotal
  record = {
    name: "#{enteredNickname}"
    points: earnedPoints
  }
  recordsList.push record


shortRecords = ->
  recordsList.sort (b, a) ->
    if a.points > b.points
      return 1
    if a.points < b.points
      return -1
    0

recordCounter = 0

printRecord = ->
  $('#record-list .card p ul').remove()
  $('#record-list .card p').append("<ul></ul>")
  for record in recordsList
    $('#record-list .card p ul').append("<li> <span>#{record.name}</span> <span>#{record.points}pts</span></li>")
    recordCounter += 1
    if recordCounter >= 11
      $('#record-list .card ul li:last-child').remove()
    recordCounter = 0

# Armado del DOM en Card
getValue = ->
  value = Math.floor(Math.random() * 10 + 1)

getIndex = ->
  questionsAvailable.indexOf(value)

remove = ->
  getIndex()
  questionsAvailable.splice(getIndex(), 1);

removeBackgrounds = ->
  $('#game-card-overlay').removeClass('card-bg-1')
  $('#game-card-overlay').removeClass('card-bg-2')
  $('#game-card-overlay').removeClass('card-bg-3')
  $('#game-card-overlay').removeClass('card-bg-4')
  $('#game-card-overlay').removeClass('card-bg-5')
  $('#game-card-overlay').removeClass('card-bg-6')
  $('#game-card-overlay').removeClass('card-bg-7')
  $('#game-card-overlay').removeClass('card-bg-8')
  $('#game-card-overlay').removeClass('card-bg-9')
  $('#game-card-overlay').removeClass('card-bg-10')


generateCard = ->
  $('.question-header img').attr('src', imgquestion)
  removeBackgrounds()
  $('#game-card-overlay').addClass(imgBackground)
  $('.question').html(question)
  $('.answers > label:nth-child(2) > p').html(answerA)
  $('.answers > label:nth-child(4) > p').html(answerB)
  $('.answers > label:nth-child(6) > p').html(answerC)

scoreUpdate = ->
  $('.time-left span:first-child').html(minutes)
  $('.time-left span:last-child').html(seconds)
  $('.score span:first-child').html(score)

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

quitScore = ->
  score -= 500
  combo = 0

scoreCalculate = ->
  scoreBonus = (minutes * 1200) + (seconds * 20)
  scoreCombomax = comboMax * 1000
  scoreTotal = score + scoreBonus

resetRadio = ->
  $('#game-card input[type=radio]').prop( "checked", false )
  answerSelected = ''

hideConfirm = ->
  $('#confirm').fadeOut(0)
  $('#incorrect').fadeIn(0)
showConfirm = ->
  $('#incorrect').fadeOut(0)
  $('#confirm').fadeIn(0)

confirmAble = ->
  $('#confirm').prop( "disabled", false )
  $('#confirm').html( 'Next' )
  $('#confirm').fadeIn(0)
  showConfirm()

confirmDisable = ->
  $('#confirm').prop( "disabled", true )
  $('#confirm').html( 'Wrong answer' )
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
  $('#footer').fadeIn(0)

hideHome = ->
  $('#overlay').fadeOut(0)
  $('#background_video').fadeOut(0)
  $('#main_content').fadeOut(0)
  $('#footer').fadeOut(0)

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

hideCongratulations = ->
  $('#congratulations-card').fadeOut(300)

showRecords = ->
  $('#record-list').fadeIn(300)

hideRecords = ->
  $('#record-list').fadeOut(300)

showNewrecord = ->
  $('#new-record').fadeIn(300)

hideNewrecord = ->
  $('#new-record').fadeOut(300)

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
  removeSecondstatus = "On"
  setTimeout ->
    removeSeconds()
  , 1000

timer = ->
  if removeSecondstatus == "Off"
    loop
      removeSeconds()
      break

# Generar Carta
selectquestions = ->
  question1()
  question2()
  question3()
  question4()
  question5()
  question6()
  question7()
  question8()
  question9()
  question10()
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
  else
    generateRandom()

generateGame = ->
  generateRandom()
  generateCard()
  checkCard()

### -FUNCIONES COMPUESTAS- ###
# Configuración del tiempo

timeLeftzero = ->
  $('.time-left span:first-child').html('00')
  $('.time-left span:nth-child(2)').html(':')
  $('.time-left span:last-child').html('00')

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
    timeLeftzero()
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
  timeLeftzero()
  time = 180
  resetValues()
  hideCongratulations()
  generateGame()
  timer()
  hideHome()
  showGame()


$('#records').click ->
  hideHome()
  shortRecords()
  printRecord()
  showRecords()

$('#backhome').click ->
  hideRecords()
  showHome()

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

$('#retry').click ->
  hideCongratulations()
  hideHome()
  generateGame()
  timer()
  showGame()

$('#nextRecord').click ->
  ifNewrecord()
  hideCongratulations()
  hideGame()

$('#nextNewrecord').click ->
  addNewrecord()
  reset()


### -EJECUTANDO FUNCIONES INICIALES- ###
hideGame()
hideCongratulations()
hideRecords()
hideNewrecord()

ifNewrecord = ->
  shortRecords()
  lowerRecord = recordsList[9].points
  if scoreTotal >= lowerRecord
    recordsList.splice(9,1)
    showNewrecord()
  else
    hideCongratulations()
    showHome()

addNewrecord = ->
  addRecord()
  shortRecords()
  showRecords()
  hideNewrecord()
  printRecord()

resetValues = ->
  minutes = Math.floor(time / 60)
  seconds = time % 60
  questionsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  value = 0
  score = 0
  scoreBonus = 0
  scoreCombomax = 0
  scoreTotal = 0
  combo = 0
  comboMax = 0

reset = ->
  time = 0
  resetValues()
  hideGame()
  hideCongratulations()
  hideNewrecord()
