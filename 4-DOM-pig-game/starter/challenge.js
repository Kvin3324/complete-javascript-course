/******************************
YOUR 3 challenges

Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's
turn. (HINT: Always save the previous dice roll in a separate variable).
2. Add an input field to the HTML where players can set the winning score, so that key can change
the predefined score of 100. (HINT: you can read the value with the .value property in Jvascript.
This is a good opportunity to use Google to figure this out.)
3. Add another dice to the game, so that there are two dices now. The player looses his
current score when one of them is 1. (HINT: you will need CSS to position the second dice,
so take a look at the CSS code for the first one.)

*/

var scores, roundScore, activePlayer, gamePlaying, numberScoreMax;
var lastDice;
var scoreMax = document.querySelector('#score-max');

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
     // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  var dice2DOM = document.querySelector('.dice-2');
  diceDOM.style.display = 'block';
  dice2DOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  dice2DOM.src = 'dice-' + dice2 + '.png';

  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice === 6 && dice2 === 6 || lastDice === 6) {
    // Player looses score
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    nextPlayer();
  } else if (dice !== 1 && dice2 !== 1) {
    // Add score
    roundScore += dice + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
    // Next player
    nextPlayer();

      }
      lastDice = dice;
    }
});


document.querySelector('.btn-hold').addEventListener('click', function() {
  numberScoreMax = parseInt(scoreMax.value);
  if (gamePlaying) {
  // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if the player won the game
    if (numberScoreMax) {
      if (scores[activePlayer] >= numberScoreMax) {
        gamePlaying = false;
        winner();
      } else {
        nextPlayer();
      }
    } else {
      if (scores[activePlayer] >= 100) {
      gamePlaying = false;
      winner();
    } else {
    // Next player
      nextPlayer();
    }
  }
}
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

function winner() {
  document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice-2').style.display = 'none';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;























