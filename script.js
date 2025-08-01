// Show popup message on load
window.addEventListener('load', function () {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'flex';

  // مفيش تشغيل صوت دلوقتي — هيشتغل بعد ما المستخدم يضغط Enter
});

// Close popup and show page
function closePopup() {
  const popup = document.getElementById('welcome-popup');
  popup.style.display = 'none';

  // Play welcome audio after user interaction (required for most browsers)
  const audio = document.getElementById('welcome-audio');
  if (audio) {
    audio.play().catch(e => {
      console.warn('Audio could not be played:', e);
    });
  }
}

// Animate floating icons with delay
const icons = document.querySelectorAll('.icon');
icons.forEach((icon, index) => {
  icon.style.animationDelay = `${index * 4}s`;
});
