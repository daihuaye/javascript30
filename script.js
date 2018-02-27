const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

function handleMouseMove(e) {
  let y = e.pageY - this.offsetTop;
  let percentage = y / this.offsetHeight;
  let min = 0.4;
  let max = 4;
  let height = Math.round(percentage * 100) + '%';
  let rate = (percentage * (max - min) + min).toFixed(2);
  
  speedBar.style.height = height;
  speedBar.textContent = rate + 'x';
  video.playbackRate = rate;
}

speed.addEventListener('mousemove', handleMouseMove);