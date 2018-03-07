// js code here
const boxes = document.querySelectorAll('.box');
const mousebox = document.querySelector('.mousebox');

let dragstart = {};
let dragend = {};
let state = '';

document.addEventListener('mousedown', function(event) {
  dragstart['x'] = event.pageX;
  dragstart['y'] = event.pageY;
  state = 'mousedown';
});

document.addEventListener('mouseup', function(event) {
  state = '';
  mousebox.style.width = 0;
  mousebox.style.height = 0;
  boxes.forEach(box => box.classList.remove('bg-lightgrey'));
});

document.addEventListener('mousemove', function(event) {
  if (state !== 'mousedown') {
    return;
  }
  dragend['x'] = event.pageX;
  dragend['y'] = event.pageY;
  updateMouseBox();
  updateBoxesOverlay();
});

function updateMouseBox() {
  let mouseCoord = getMouseCoordinate();
  mousebox.style.left = mouseCoord.sx + 'px';
  mousebox.style.top = mouseCoord.sy + 'px';
  mousebox.style.height = mouseCoord.ey - mouseCoord.sy + 'px';
  mousebox.style.width = mouseCoord.ex - mouseCoord.sx + 'px';
}

function getMouseCoordinate() {
  return {
    sx: Math.min(dragstart.x, dragend.x),
    sy: Math.min(dragstart.y, dragend.y),
    ex: Math.max(dragstart.x, dragend.x),
    ey: Math.max(dragstart.y, dragend.y)
  }
}

function getBoxCoordinate(box) {
  return {
    sx: box.offsetLeft,
    sy: box.offsetTop,
    ex: box.offsetLeft + box.offsetWidth,
    ey: box.offsetTop + box.offsetHeight
  }
}

function isOverlay(box) {
  let boxCoord = getBoxCoordinate(box);
  let mouseCoord = getMouseCoordinate();

  let cx = (boxCoord.sx >= mouseCoord.ex || mouseCoord.sx >= boxCoord.ex);
  let cy = (boxCoord.sy >= mouseCoord.ey || mouseCoord.sy >= boxCoord.ey);
  return !(cy || cx);
}

function updateBoxesOverlay() {
  boxes.forEach(box => {
    if (isOverlay(box)) {
      box.classList.add('bg-lightgrey');
    } else {
      box.classList.remove('bg-lightgrey');
    }
  });
}