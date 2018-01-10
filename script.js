const checkboxes = document.querySelectorAll('input');
let isShiftKeyDown = false;
let currentCheckbox = undefined;


function onClick(event) {
  if (isShiftKeyDown && event.target.checked) {
    let shouldUpdate = false;
    currentCheckbox.checked = true;
    checkboxes.forEach(box => {
      if (shouldUpdate) {
        box.checked = true;  
      }
      if (box === currentCheckbox || box === event.target) {
        shouldUpdate = !shouldUpdate;
      }
    });
  }
  currentCheckbox = event.target;
}

function onKeyDown(event) {
  if (event.keyCode === 16) {
    isShiftKeyDown = true;
  } else {
    isShiftKeyDown = false;
  }
}

checkboxes.forEach(box => {
  box.addEventListener('change', onClick)
});

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', () => { isShiftKeyDown = false });