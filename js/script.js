function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień'
  } else if (argMoveId == 2) {
    return 'papier'
  } else if (argMoveId == 3) {
    return 'nożyce'
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.')
  return 'nieznany ruch'
}

// Player's move
let playerInput = prompt('Wybierz swój ruch: 1.kamień 2.papier 3.nożyce')
let playerMove = getMoveName(playerInput)

/* 
if (playerInput == 1) {
  PlayerMove = 'kamień'
} else if (playerInput == 2) {
  PlayerMove = 'papier'
} else if (playerInput == 3) {
  PlayerMove = 'nożyce'
}
*/

// Computer's move
let randomNumber = Math.floor(Math.random() * 3 + 1)
let computerMove = getMoveName(randomNumber)

/* 
if (randomNumber == 1) {
  ComputerMove = 'kamień'
} else if (randomNumber == 2) {
  ComputerMove = 'papier'
} else if (randomNumber == 3) {
  ComputerMove = 'nożyce'
}
*/

// Game's logic

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage(`Wygrał gracz: ${argComputerMove} > ${argPlayerMove}`)
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage(`Wygrał gracz: ${argComputerMove} > ${argPlayerMove}`)
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage(`Wygrał gracz: ${argComputerMove} > ${argPlayerMove}`)
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
  } else if (
    argComputerMove == argPlayerMove &&
    argPlayerMove !== 'nieznany ruch'
  ) {
    printMessage('Remis: obaj gracze wybrali: ' + argComputerMove)
  }
}

displayResult(computerMove, playerMove)
