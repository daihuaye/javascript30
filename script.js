const inputs = document.querySelectorAll('input');

function setUpdate() {
  const suffix = this.dataset.sizing || '';
  
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', setUpdate));
inputs.forEach(input => input.addEventListener('mousemove', setUpdate));
