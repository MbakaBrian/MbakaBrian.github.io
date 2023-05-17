const fadeIn = document.querySelectorAll('.fade-in');

function checkFade() {
  for (let i = 0; i < fadeIn.length; i++) {
    let fadeInPos = fadeIn[i].getBoundingClientRect().top + fadeIn[i].offsetHeight;
    let screenPos = window.innerHeight;
    if (fadeInPos < screenPos) {
      fadeIn[i].style.opacity = '1';
    }
  }
}

window.addEventListener('scroll', checkFade);