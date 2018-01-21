export const setAudio = () => {
  const audioList = document.getElementById('audio-list');
  for (let i = 1; i < 28; i++) {
    audioList.innerHTML += `<audio id='${i}' src='./sound/${i}.wav'></audio>`;
  }
};

export const muteAudio = () => {
  for (var i = 1; i < 28; i++) {
    const audio = document.getElementById(`${i}`);
    audio.currentTime = 0;
    audio.pause();
  }
};

export const pauseBacktrack = () => {
  const audio = document.getElementById('backtrack');
  audio.pause();
};

export const resumeBacktrack = () => {
  const audio = document.getElementById('backtrack');
  audio.play();
};
