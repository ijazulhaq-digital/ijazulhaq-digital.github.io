// Contact Form Submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جب فارم Submit ہو تو یہ میسج آئے گا
    alert('شکریہ! آپ کا میسج بھیج دیا گیا ہے۔ میں جلد ہی آپ سے رابطہ کروں گا۔');
    
    // فارم خالی کر دو
    this.reset();
});

// Navbar پر کلک کرنے سے Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
