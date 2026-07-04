// ==============================
// Premium Portfolio JavaScript
// ==============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar Shadow
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,15,35,.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";

    }

});

// Image Hover Animation

const image = document.querySelector(".hero-image img");

if(image){

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.05)";
image.style.transition=".4s";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

}

// Typing Effect

const typingText = [
"Web Developer",
"Frontend Developer",
"Freelancer",
"Digital Creator"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count===typingText.length){

count=0;

}

currentText=typingText[count];

letter=currentText.slice(0,++index);

const h2=document.querySelector(".hero-text h2");

if(h2){

h2.textContent=letter;

}

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1200);

}else{

setTimeout(type,120);

}

})();

// Fade In Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";
section.style.transition=".8s";

observer.observe(section);

});

// Current Year Footer

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

// Console Message

console.log("Ijaz Ul Haq Portfolio Loaded Successfully");
