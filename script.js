// Smooth Scroll for 'Search Now' Button
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});

// Button Hover Animation
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

//Typing Text Animation
const text = "Find me a 2BHK in London under 400K near gardens and I want it near the tube";
let index = 0;

function typeEffect() {
    const element = document.getElementById('typing-text');
    element.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100); 
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector("nav");
    
    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});
