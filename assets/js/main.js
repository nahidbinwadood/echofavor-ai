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

  // testimonials slider:
  // Testimonials slider initialization
  const testimonialSlider = $(
    '.testimonial-slider-wrapper .owl-carousel'
  ).owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    items: 3,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Custom navigation button event listeners
  $('#testimonial-slider-prev-btn').click(function () {
    testimonialSlider.trigger('prev.owl.carousel');
  });

  $('#testimonial-slider-next-btn').click(function () {
    testimonialSlider.trigger('next.owl.carousel');
  });
});
