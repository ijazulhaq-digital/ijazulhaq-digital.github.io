// 1. TYPING EFFECT - Hero Name
const typingText = document.querySelector('.hero-text h2');
const text = "Ijaz Ul Haq";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = () => {
    typingText.innerHTML = "";
    typeWriter();
}

// 2. SCROLL ANIMATION - Fade In Sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// 3. CONTACT FORM - Professional Submit in English Only
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Validation
    if(name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Send to Formspree
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok
