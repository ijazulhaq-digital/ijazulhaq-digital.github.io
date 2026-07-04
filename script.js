// =========================
// Navbar Active Link
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });
});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =========================
// Typing Effect
// =========================

const text = [
    "Web Developer",
    "Frontend Developer",
    "Digital Creator",
    "Freelancer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const element = document.getElementById("typing");

    if(element){
        element.textContent = letter;
    }

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,100);

    }

})();
