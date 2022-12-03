let playerInput = prompt('Wybierz swój ruch: 1.kamień 2.papier 3.nożyce')
let playerMove = 'nieznany ruch'

if (playerInput == 1) {
  playerMove = 'kamień'
} else if (playerInput == 2) {
  playerMove = 'papier'
} else if (playerInput == 3) {
  playerMove = 'nożyce'
}

let randomNumber = Math.floor(Math.random() * 3 + 1)

//console.log('Wylosowana liczba to: ' + randomNumber)

let computerMove = 'nieznany ruch'

if (randomNumber == 1) {
  computerMove = 'kamień'
} else if (randomNumber == 2) {
  computerMove = 'papier'
} else if (randomNumber == 3) {
  computerMove = 'nożyce'
}

if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage(`Wygrał gracz: ${computerMove} < ${playerMove}`)
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage(`Wygrał gracz: ${computerMove} > ${playerMove}`)
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage(`Wygrał gracz: ${computerMove} > ${playerMove}`)
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage(`Wygrał gracz: ${computerMove} < ${playerMove}`)
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage(`Wygrał gracz: ${computerMove} > ${playerMove}`)
} else if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage(`Wygrał gracz: ${computerMove} < ${playerMove}`)
} else if (computerMove == playerMove && playerMove !== 'nieznany ruch') {
  printMessage('Remis: obaj gracze wybrali: ' + computerMove)
} else {
  printMessage('błędny input!')
}

// test - added ssh key once again
// test 4
