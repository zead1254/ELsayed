// Show popup message on load
window.addEventListener('load', function () {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'flex';

  // Play welcome audio
  const audio = document.getElementById('welcome-audio');
  if (audio) {
    audio.play().catch(e => {
      console.warn('Autoplay blocked. Audio will play after interaction.');
    });
  }
});

// Close popup and show page
function closePopup() {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'none';
}

// Optional: Loop background floating icons slowly with delay
const icons = document.querySelectorAll('.icon');
icons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 4}s`;
});
