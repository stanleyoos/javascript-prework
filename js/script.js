function playGame(playerInput) {
  clearMessages()
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
  //let playerInput = prompt('Wybierz swój ruch: 1.kamień 2.papier 3.nożyce')
  let playerMove = getMoveName(playerInput)

  // Computer's move
  let randomNumber = Math.floor(Math.random() * 3 + 1)
  let computerMove = getMoveName(randomNumber)

  // Game's logic
  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
      playerScore++
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage(`Wygrał komputer: ${argComputerMove} > ${argPlayerMove}`)
      computerScore++
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage(`Wygrał komputer: ${argComputerMove} > ${argPlayerMove}`)
      computerScore++
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
      playerScore++
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage(`Wygrał komputer: ${argComputerMove} > ${argPlayerMove}`)
      computerScore++
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
      playerScore++
    } else if (
      argComputerMove == argPlayerMove &&
      argPlayerMove !== 'nieznany ruch'
    ) {
      printMessage('Remis: obaj gracze wybrali: ' + argComputerMove)
    }
  }

  displayResult(computerMove, playerMove)
  updateResult()
}

// buttons
document.getElementById('rock').addEventListener('click', () => playGame(1))
document.getElementById('paper').addEventListener('click', () => playGame(2))
document.getElementById('scissors').addEventListener('click', () => playGame(3))

// result
let playerScore = 0
let computerScore = 0
