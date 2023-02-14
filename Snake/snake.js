let snake = [0, 1, 2];
const size = 10;
const box = document.getElementById('snake-box');
const playButton = document.getElementById('play-button');
const score = document.getElementById('score');
const playAgainButton = document.getElementById('again-button')
const pauseButton = document.getElementById('pause-button');
const interval = 500;
let accumulator = 1;
let divs;
let idInterval;
let foodIndex;
let scoreCount = 0;

playButton.addEventListener('click', () => {
    startGame();
});

pauseButton.addEventListener('click', () => {
    alert('pausa')
});

playAgainButton.addEventListener('click', () => {
    document.getElementById('container-dialog').style="visibility:hidden;"   
    startGame();
});

//up
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowUp') {
    accumulator = -size;
  } 
});

//down
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowDown') {
    accumulator = size; 
  }
});

//left
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') {
    accumulator = -1
  }
});

// right
document.addEventListener('keyup', (event) => {
  if(event.key === 'ArrowRight') {
    right(); }
});

function createBox() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const div = document.createElement('div');
      box.appendChild(div);
    }
  }
}

function drawSnake() {
  divs = document.querySelectorAll('.box div');
  snake.forEach((index) => divs[index].classList.add('snake'));
}

function moveSnake() {
  const tail = snake.shift();
  divs[tail].classList.remove('snake');
  const head = snake[snake.length - 1] + accumulator;
  if (isCollision(head)) {
    document.getElementById('container-dialog').style="visibility:visible;"
    clearGame()
    return;
  }

  snake.push(head);
  divs[head].classList.add('snake');

  // food
  eatFood(tail);
}

function eatFood(tail) {
  if (snake[snake.length - 1] === foodIndex) {
    divs[foodIndex].classList.remove('food');
    snake.unshift(tail);
    divs[tail].classList.add('snake');
    score.innerText = ++scoreCount;
    randomFood();
  }
}

function isCollision(index) {
  if (
    index >= size * size
    || index < 0
    || (accumulator === 1 && index % size === 0)
    || (accumulator === -1 && (index + 1) % size === 0)
  ) {
    return true;
  }
  return false;
}

function startGame() {
  clearGame();
  idInterval = setInterval(() => {
    moveSnake();
  }, interval);
}

function clearGame() {
  snake = [0, 1, 2];
  box.innerHTML = '';
  accumulator = 1;
  scoreCount = 0;
  score.innerText = scoreCount;
  clearInterval(idInterval);
  createBox();
  drawSnake();
  randomFood();
}

function up() {
  accumulator = -size;
}

function down() {
  accumulator = size;
}

function left() {
  accumulator = -1;
}

function right() {
  accumulator = 1;
}

function randomFood() {
  foodIndex = Math.floor(Math.random() * divs.length);
  while (snake.includes(foodIndex)) {
    foodIndex = Math.floor(Math.random() * divs.length);
  }
  divs[foodIndex].classList.add('food');
}

function handlePlayagain() {
  document.getElementById('container-dialog').style="visibility:hidden;"
    clearGame();
} 

clearGame();