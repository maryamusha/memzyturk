// You can use this script to trigger balloons fading after the load
window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.balloons-container').style.display = 'none';
    }, 10000);  // 10 seconds
  });