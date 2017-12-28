const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');

function setTime() {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();
  
  // avoid the animation break, for example second hand when from 59 to 0, the degree will be reduce from 350 to 0, 
  // which will be seeing the second hand going backward to the orignal start point
  hourHand.style.transitionDuration = hours === 0 ? '0s': '1s';
  minHand.style.transitionDuration = mins === 0 ? '0s': '1s';
  secondHand.style.transitionDuration = seconds === 0 ? '0s': '1s';
  
  const secondHandDeg = ((seconds / 60) * 360) + 90;
  const hourHandDeg = ((hours % 12) / 12 * 360) + 90;
  const minHandDeg = ((mins / 60 ) * 360) + 90;  
  
  secondHand.style.transform = `rotate(${secondHandDeg}deg)`;
  hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
  minHand.style.transform = `rotate(${minHandDeg}deg)`;
}

setInterval(setTime, 1000);