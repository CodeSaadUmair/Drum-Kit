function playSound(event) {
  const keyCode = event.keyCode || event.currentTarget.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) {
    console.warn("Audio file not found or blocked.");
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", playSound);
});

window.addEventListener("keydown", playSound);

window.addEventListener("touchstart", playSound);
