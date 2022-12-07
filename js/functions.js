const printMessage = function (msg) {
  let div = document.createElement('div')
  div.innerHTML = msg
  document.getElementById('messages').appendChild(div)
}

const clearMessages = function () {
  document.getElementById('messages').innerHTML = ''
}

// update the result
const updateResult = function () {
  document.getElementById('computer-result').innerHTML = computerScore
  document.getElementById('player-result').innerHTML = playerScore
}
