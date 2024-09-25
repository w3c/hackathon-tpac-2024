// create an audioContext instance
const audioCtx = new AudioContext();

// define oscillator
const oscillator = audioCtx.createOscillator();
oscillator.type = "square";

// connect to audioContext instance
oscillator.connect(audioCtx.destination);

let playbackIndex = 0;

const frequencyDurationMap = [
  650, 1.5,
  350, 1.5,
  700, 1,
  400, 1,
  700, 1,
  400, 1,
  500, 1,
];

function playNext () {
  const frequency = frequencyDurationMap[playbackIndex];
  if (!frequency) {
    oscillator.stop();
    return;
  }

  // set frequency of oscillator
  oscillator.frequency.value = frequency;

  if (playbackIndex === 0) {
    oscillator.start();
  }

  const durationInSeconds = frequencyDurationMap[playbackIndex + 1];
  const duration = durationInSeconds * 1e3;
  playbackIndex += 2;
  setTimeout(playNext, duration);
}

const buttonEl = document.getElementById('connector');
buttonEl.addEventListener('click', function () {
  playNext();
  document.documentElement.classList.add('enabled');
});
