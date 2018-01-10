const checkboxes = document.querySelectorAll('input');

let currentCheckbox = undefined;

function onClick(event) {
  if (event.shiftKey && event.target.checked) {
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

checkboxes.forEach(box => {
  box.addEventListener('click', onClick)
});
