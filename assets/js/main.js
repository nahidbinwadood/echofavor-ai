$(document).ready(function () {
  // play the video:
   // Get the elements
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const heroVideo = document.getElementById('hero-video');

// Function to play the video and toggle buttons
playBtn?.addEventListener('click', () => {
  heroVideo.loop = true;
  heroVideo.play();
  playBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
});

// Function to pause the video and toggle buttons
pauseBtn?.addEventListener('click', () => {
  heroVideo.pause();
  playBtn.classList.remove('hidden');
  pauseBtn.classList.add('hidden');
});
});
