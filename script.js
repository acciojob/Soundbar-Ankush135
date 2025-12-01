//your JS code here. If required.
const buttonsContainer = document.getElementById("buttons");
const sounds = [
  "sound1.mp3",
  "sound2.mp3",
  "sound3.mp3",
  "sound4.mp3",
  "sound5.mp3"
];

let currentAudio = null;

sounds.forEach((sound, index) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = index + 1;

  btn.addEventListener("click", () => {
    stopSound();

    const audio = new Audio(`sounds/${sound}`);
    currentAudio = audio;

  
    audio.play().catch(() => {});
  });

  buttonsContainer.appendChild(btn);
});


const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "Stop";

stopBtn.addEventListener("click", stopSound);

buttonsContainer.appendChild(stopBtn);


function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}