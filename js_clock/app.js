const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClockDregrees(isHour, time) {
  const TWV = 12;
  const SITN = 60;
  if(isHour) {
    return ((time/TWV) * 360) + 90;
  } else {
    return ((time/SITN) * 360) + 90
  }
}
function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegrees = setClockDregrees(false, seconds);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = date.getMinutes();
  const minutesDegrees = setClockDregrees(false, minutes);
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = setClockDregrees(true, hours);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);