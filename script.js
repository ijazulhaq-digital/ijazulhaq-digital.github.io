// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation - جب سکرول کریں تو چیزیں آئیں
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }, index * 200); // ہر باکس 0.2 سیکنڈ delay سے
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project, h2').forEach(el => {
    observer.observe(el);
});
