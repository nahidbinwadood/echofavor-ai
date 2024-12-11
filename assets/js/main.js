$(document).ready(function () {
  // play the video:
  // Get the elements
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const video = document.getElementById('hero-video');

  // Function to play the video and toggle buttons
  playBtn.addEventListener('click', () => {
    // Show the video and play it
    video.classList.remove('hidden');
    video.play();

    // Hide the play button and show the pause button
    playBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  });

  // Function to pause the video and toggle buttons
  pauseBtn.addEventListener('click', () => {
    // Pause the video
    video.pause();

    // Show the play button and hide the pause button
    playBtn.classList.remove('hidden');
    pauseBtn.classList.add('hidden');
  });
});
