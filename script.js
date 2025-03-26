// Select elements
const overlay = document.getElementById('overlay');
const fullScreenImage = document.querySelector('.full-screen-image');
const clickableImages = document.querySelectorAll('.project-image');
const closeBtn = document.querySelector('.close-btn');
const body = document.body; // Select the body element

// Show overlay and set the clicked image
clickableImages.forEach((img) => {
  img.addEventListener('click', () => {
    fullScreenImage.src = img.src; // Set the full-screen image to the clicked image's src
    overlay.style.display = 'flex'; // Show the overlay
    body.classList.add('no-scroll'); // Disable scrolling
  });
});

// Hide overlay when the close button is clicked
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none'; // Hide the overlay
  body.classList.remove('no-scroll'); // Enable scrolling again
});
