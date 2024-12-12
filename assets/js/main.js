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

  //////////////////////////Pricing::start //////////////////////////
  const tabButtons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.content');
  const indicator = document.querySelector('.indicator');

  // Set initial indicator position and width when the page loads
  window.addEventListener('load', () => {
    const activeButton = document.querySelector('.tab-button.active');
    if (activeButton) {
      indicator.style.left = `${activeButton.offsetLeft}px`;
      indicator.style.width = `${activeButton.offsetWidth}px`;
    }
  });

  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));

      // Add active class to the clicked button and corresponding content
      button.classList.add('active');
      contents[index].classList.add('active');

      // Update the indicator position and width
      indicator.style.left = `${button.offsetLeft}px`;
      indicator.style.width = `${button.offsetWidth}px`;
    });
  });

  //pricing accordion:
  const headers = document.querySelectorAll('.pricing-accordion-header');

  // Initialize the first accordion item as active
  if (headers.length > 0) {
    const firstHeader = headers[0];
    const firstSection = firstHeader.closest('.pricing-accordion-section');
    const firstContent = firstSection.querySelector('.pricing-accordion-content');
    const firstDropdownArrow = firstHeader.querySelector('.pricing-dropdown--arrow');

    // Open the first accordion
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstContent.style.padding = '15px';
    firstSection.classList.add('active');
    firstDropdownArrow.style.transform = 'rotate(180deg)';
  }

  // Add click event listeners to all headers
  headers.forEach((header) => {
    header.addEventListener('click', function () {
      const section = this.closest('.pricing-accordion-section');
      const content = section.querySelector('.pricing-accordion-content');
      const dropdownArrow = this.querySelector('.pricing-dropdown--arrow');

      // Close all other accordions
      headers.forEach((otherHeader) => {
        if (otherHeader !== header) {
          const otherSection = otherHeader.closest('.pricing-accordion-section');
          const otherContent = otherSection.querySelector('.pricing-accordion-content');
          const otherDropdownArrow = otherHeader.querySelector('.pricing-dropdown--arrow');

          otherContent.style.maxHeight = null;
          otherContent.style.padding = '0 15px';
          otherSection.classList.remove('active');
          otherDropdownArrow.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current accordion
      if (content.style.maxHeight) {
        // Close current accordion
        content.style.maxHeight = null;
        content.style.padding = '0 15px';
        section.classList.remove('active');
        dropdownArrow.style.transform = 'rotate(0deg)';
      } else {
        // Open current accordion
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = '15px';
        section.classList.add('active');
        dropdownArrow.style.transform = 'rotate(180deg)';
      }
    });
  });

  //////////////////////////Pricing::end //////////////////////////
});
