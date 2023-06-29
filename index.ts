const board = document.querySelector('#board') as HTMLElement;
const SQUARE_AREA = 400;
const colors = ['#eea47e', '#01539d', '#0f1920', '#fee716', '#aeeeee', '#f3c2c2', '#fbe77d', '#f96265', '#fbf6f5', '#980212', '#4832d3', '#cdf281', '#3a6b34', '#cbd190', '#e3b448', '#98f443', '#e84498'];

const calculateSquareQuantity = () => {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const windowArea = width * height;
  return Math.ceil(windowArea / SQUARE_AREA);
}

let squaresNumber = calculateSquareQuantity();

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const setColor = (element: HTMLElement) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = (element: HTMLElement) => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  })

  board.append(square);
}
