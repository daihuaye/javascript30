let money = [1, 5, 10, 20, 100, 1000, 5000, 1000000, null];
const WIN = 1000000;
const LOST = null;
const game = document.querySelector('.game');
const reset = document.querySelector('.reset');
const total = document.querySelector('.total');
let currentAmount = 0;
let isGameEnd = false;

game.addEventListener('click', function(event) {
  let index = parseInt(event.target.dataset.index);
  let whatyougot = money[index];
  if (whatyougot === undefined || isGameEnd) {
    return;
  }
  currentAmount += whatyougot;
  reviewBox(event.target, whatyougot);
  if (whatyougot === LOST) {
    total.textContent = 'End, you got nothing';
    isGameEnd = true;
  } else if (whatyougot === WIN) {
    total.textContent = `You are millionaire, you have got $${currentAmount}`;
    isGameEnd = true;
  }
});

reset.addEventListener('click', function() {
  start();
});

function reviewBox(element, whatyougot) {
  element.textContent = `$${whatyougot}`;
  element.dataset.index = -1;
}

function createBoard() {
  game.innerHTML = money.map((dollar, index) => {
    return `<div class="box"><span data-index="${index}">${index}</span></div>`;
  }).join('');
}

function shuffle(money) {
  let copyArray = money.slice();
  let newArray = [];
  
  while(copyArray.length > 0) {
    let rIdx = Math.floor(Math.random() * copyArray.length);
    newArray.push(...copyArray.splice(rIdx, 1));
  }
  return newArray;
}

function start() {
  currentAmount = 0;
  total.textContent = "";
  isGameEnd = false;
  money = shuffle(money);
  createBoard();
}

start();
