// To hide the element under the navbar when it scrolls over it
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 130);
})

// Settigs for the menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
};

// ScrollReveal library  allows you to easily animate elements as they enter the viewport during a scroll
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.hero-text,.skills-content,.mid-left',{origin:'left'});
ScrollReveal().reveal('.hero-img,.mid-right',{origin:'right'});
ScrollReveal().reveal('.scroll, .my_projects-btn,',{origin:'bottom'});
ScrollReveal().reveal('.mid-text',{origin:'top'});
ScrollReveal().reveal('.certifications-content, .about_me, .my_projects-content, .contact-content',{origin:'right'});

function showCV() {
// For a path to the CV file
var cvPath = 'Ahmad Sabbagh-Resume.pdf';
// Open the file in a new window
window.open(cvPath, '_blank');
}

function showCERTIFICATES() {
// For a path to the CERTIFICATES file
var cvPath = 'CERTIFICATES-OF-EXCELLENCE.pdf';
// Open the file in a new window
window.open(cvPath, '_blank');
}

// input is the selector for the HTML element where the typing animation will be applied
var typed = new Typed(".input", {                              
    strings: ["I am web developer"],
    typeSpeed:120,
    backSpedd:70,
    loop:true
}); 



                                                 




