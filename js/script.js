const playGame = function (playerInput) {
  // result
  let playerScore,
    computerScore = 0

  clearMessages()
  const getMoveName = function (argMoveId) {
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
  const playerMove = getMoveName(playerInput)

  // Computer's move
  const randomNumber = Math.floor(Math.random() * 3 + 1)
  const computerMove = getMoveName(randomNumber)

  // Game's logic
  const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage(`Wygrał gracz: ${argComputerMove} < ${argPlayerMove}`)
      playerScore++
      console.log(playerScore)
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
