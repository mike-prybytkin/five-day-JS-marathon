const downButton: HTMLButtonElement = document.querySelector('.down-button') as HTMLButtonElement;
const upButton = document.querySelector('.up-button') as HTMLButtonElement;
const container = document.querySelector('.container') as HTMLElement;

const mainSlide = document.querySelector('.main-slide') as HTMLElement;
const slidesCount = mainSlide.querySelectorAll('div').length;

const sidebar = document.querySelector('.sidebar') as HTMLElement;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

const translateSlide = () => {
  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

const changeSlide = (direction: 'up' | 'down') => {
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  };

  translateSlide();
};

upButton.addEventListener('click', () => {
  changeSlide('up');
})

downButton.addEventListener('click', () => {
  changeSlide('down');
});
