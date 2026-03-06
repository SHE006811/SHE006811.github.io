document.addEventListener("DOMContentLoaded", function(){

// Typing animation
const text = "Computer Science Student | Python Developer | Future Software Engineer";
let i = 0;
function typing(){
if(i < text.length){
document.querySelector(".typing").textContent += text.charAt(i);
i++;
setTimeout(typing,50);
}
}
typing();

// Scroll reveal
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.style.opacity = 1;
sec.style.transform = "translateY(0)";
}
});
});

// Particles
particlesJS("particles", {
particles: {
number: { value: 80 },
size: { value: 3 },
color: { value: "#38bdf8" },
line_linked: { enable: true, color: "#38bdf8" },
move: { speed: 2 }
}
});

});
