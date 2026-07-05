// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button hover effect
const btn = document.querySelector('.btn');
if(btn){
  btn.addEventListener('mouseover', () => {
      btn.style.letterSpacing = '1px';
  });
  btn.addEventListener('mouseout', () => {
      btn.style.letterSpacing = '0px';
  });
}
