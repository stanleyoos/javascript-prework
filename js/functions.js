function printMessage(msg) {
  let div = document.createElement('div')
  div.innerHTML = msg
  document.getElementById('messages').appendChild(div)
}

function clearMessages() {
  document.getElementById('messages').innerHTML = ''
}

// update the result
function updateResult() {
  document.getElementById('computer-result').innerHTML = computerScore
  document.getElementById('player-result').innerHTML = playerScore
}
