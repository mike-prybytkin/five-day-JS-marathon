const item = document?.querySelector('.item') as HTMLElement;
const placeholders: NodeListOf<Element> = document.querySelectorAll('.placeholder');

const dragOver = (e: Event) => {
  e.preventDefault();
}

const dragEnter = (e: Event) => {
  (e.target as HTMLElement).classList.add('hovered');
}

const dragLeave = (e: Event) => {
  (e.target as HTMLElement).classList.remove('hovered');
}

const dragDrop = (e: Event) => {
  (e.target as HTMLElement).classList.remove('hovered');
  (e.target as HTMLElement).append(item);
}

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

const dragStart = (e: Event) => {
  (e.target as HTMLElement).classList.add('hold');
  setTimeout(() => {
    (e.target as HTMLElement).classList.add('hide');
  }, 0)
}

const dragEnd = (e: Event) => {
  (e.target as HTMLElement).classList.remove('hold', 'hide');
}

item?.addEventListener('dragstart', dragStart);
item?.addEventListener('dragend', dragEnd);
