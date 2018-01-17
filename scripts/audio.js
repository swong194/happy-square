export const setAudio = () => {
  const audioList = document.getElementById('audio-list');
  for (let i = 1; i < 28; i++) {
    audioList.innerHTML += `<audio id='${i}' src='./sound/${i}.wav'></audio>`;
  }
};
