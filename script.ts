const startBtn = document.querySelector('#start') as HTMLElement;
const timeList = document.querySelector('#time-list') as HTMLElement;
const timeEl = document.querySelector('#time') as HTMLElement;
const board = document.querySelector('#board') as HTMLElement;
const screens: NodeListOf<Element> = document.querySelectorAll('.screen');
const colors = ['#eea47e', '#01539d', '#0f1920', '#fee716', '#aeeeee', '#f3c2c2', '#fbe77d', '#f96265', '#fbf6f5', '#980212', '#4832d3', '#cdf281', '#3a6b34', '#cbd190', '#e3b448', '#98f443', '#e84498'];
let gameTime = 0;
let score = 0;
let setIntervalId: number;

const getRandomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const startGame = () => {
  (timeEl.parentNode as HTMLElement).classList.remove('hide');
  setIntervalId = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(gameTime);
}

const returnToStartWindow = () => {
  document.querySelector('#new-game')?.addEventListener('click', (e) => {
    e.preventDefault();
    screens.forEach((el) => el.classList.remove('up'));
    document.querySelector('.total-score')?.remove();
  });
}

const finishGame = () => {
  clearInterval(setIntervalId);
  (timeEl.parentNode as HTMLElement).classList.add('hide');
  board.innerHTML = `
  <div class="total-score">
  <h1>Score: <span class="primary">${score}</span></h1>
  <a href="#" id="new-game" class="new-game">Попробовать ещё раз</a>
  </div>
  `;
  returnToStartWindow();
  gameTime = 0;
  score = 0;
}


const createRandomCircle = () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const size = getRandomNumber(10, 60);
  const { width, height } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);;
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.background = `linear-gradient(90deg, ${color1} 0%, ${color2} 47%, ${color3} 100%)`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

const setTime = (value: number | string) => {
  timeEl.innerHTML = `00:${value}`;
}

const decreaseTime = () => {
  if (gameTime === 0) {
    finishGame();
  } else {
    let current = `${--gameTime}`;
    if (+current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}


startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
  const target = (e.target) as HTMLElement;

  if (target.classList.contains('time-btn')) {
    gameTime = Number(target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (e) => {
  const target = (e.target) as HTMLElement;
  if (target.classList.contains('circle')) {
    score++;
    target.remove();
    createRandomCircle();
  }
});
