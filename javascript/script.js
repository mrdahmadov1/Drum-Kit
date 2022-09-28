"use strict";

const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;

  const playTime = setInterval(function () {
    audio.play();
    key.classList.add("playing");

    clearInterval(playTime);
  }, audio.duration);

  const stopTime = setInterval(function () {
    key.classList.remove("playing");

    clearInterval(stopTime);
  }, audio.duration + 100);
};

window.addEventListener("keydown", playSound);
