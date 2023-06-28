const slidesPlugin = (activeSlide = 0) => {
  const slides: NodeListOf<Element> = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    });
  });

  const clearActiveClasses = () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  };
};

slidesPlugin(2);
