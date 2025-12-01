const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

function stopAll() {
  document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    stopAll();
    const sound = btn.getAttribute("data-sound");
    const audio = document.getElementById(sound);
    audio.play();
  });
});

stopBtn.addEventListener("click", stopAll);