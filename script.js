// Select elements
const overlay = document.getElementById('overlay');
const fullScreenImage = document.querySelector('.full-screen-image');
const clickableImages = document.querySelectorAll('.project-image');
const closeBtn = document.querySelector('.close-btn');
const body = document.body; // Select the body element
let active = false;

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

// Prevent Email services from 
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("emailForm").addEventListener("submit", async function(event) {
      event.preventDefault();

      let formData = new FormData(this);
      let button = document.getElementById("submit-btn");
      let popup = document.querySelector(".popup");

      button.textContent = "Sending..."; // Change the text to indicate submission in progress

      if (active){
        popup.classList.add("show");

        setTimeout(() => {
          popup.classList.remove("show");
        },4000);

        return;
      }

      try {
          let response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
          });

          let result = await response.json();
          console.log(result); // Log result to check the response structure

          // Change button text based on the success or failure of the submission
          button.textContent = result.success ? "Message sent!" : "Error sending.";
      } catch (error) {
          console.log(error.message); // Log error message if fetch fails
          button.textContent = "Error occurred.";
      }

      button.textContent = "Sent!"
      active = true;
      // Reset the button text after 3 seconds
      setTimeout(() => {
          button.textContent = "Send";
      }, 3000);

      setTimeout(() => {
        active = false;
      }, 10000);
  });
});