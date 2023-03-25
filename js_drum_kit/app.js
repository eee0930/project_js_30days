function playSound(e) {
  // console.log(e);
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if(!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  // console.log(e);
  if(e.propertyName !== "transform") return; // skip it if it's not a transform.
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key => key.addEventListener("transitionend", removeTransition)));

window.addEventListener("keydown", playSound);