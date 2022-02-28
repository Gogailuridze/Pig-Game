'use strict';
//selecting elements and hide them to make clean environment
let makeRoll = Math.trunc(Math.random() * 6) + 1;
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0el = document.getElementById('current--0');
const current1el = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceImg.classList.add('hidden');
//start implement dice logic
const scores = [0, 0];
let currentScore = 0;
let activeplayer = 0;
let isPlaying = true;
const switchPlayer = () => {
  document.getElementById('current--' + activeplayer).textContent = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  //make random numbers for dice roll
  if (isPlaying) {
    makeRoll = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceImg.classList.remove('hidden');
    diceImg.src = 'dice-' + makeRoll + '.png';
    //swirch player 1
    if (makeRoll !== 1) {
      currentScore += makeRoll;
      document.getElementById('current--' + activeplayer).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    scores[activeplayer] += currentScore;
    document.getElementById('score--' + activeplayer).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 20) {
      isPlaying = false;
      document
        .querySelector('.player--' + activeplayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activeplayer)
        .classList.remove('player--active');
      diceImg.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  diceImg.classList.add('hidden');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  isPlaying = true;
  activeplayer = 0;
});
