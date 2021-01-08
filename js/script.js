var scores, roundScore, activePlayer;
let isPlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
    if (isPlaying) {
        //  RANDOM NUMBER GENERATOR
        var dice = Math.floor(Math.random() * 6) + 1;

        //  DISPLAY THE RESULT
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';

        //  UPDATING RESULT
        if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current--' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (isPlaying) {
        //  ADD CURENT SCORE TO GLOBAL SCORE
        scores[activePlayer] += roundScore;

        //  UPDATE THE UI
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

        //  CHECK IF PLAYER WON THE GAME
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name--' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            isPlaying = false;
        } else {
            //  NEXT PLAYER 
            nextPlayer();
        }
    }

});

document.querySelector('.btn--new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    diceDOM.style.display = 'none';
}

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;

    document.getElementById('score--0').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');

    document.querySelector('.dice').style.display = 'none';
}







