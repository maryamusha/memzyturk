// Function to start balloon animation when page loads
window.addEventListener('load', function() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
      balloon.style.animationPlayState = 'running';
    });
  });