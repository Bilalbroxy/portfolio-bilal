<<<<<<< HEAD
const text = "MERN Stack Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

typingEffect();

img.addEventListener("mouseenter", () => {
  speed = 0.01;
});

img.addEventListener("mouseleave", () => {
  speed = 0.05;
});
// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});
=======
const text = "MERN Stack Developer";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 100);
  }
}

typingEffect();

img.addEventListener("mouseenter", () => {
  speed = 0.01;
});

img.addEventListener("mouseleave", () => {
  speed = 0.05;
});
>>>>>>> 340f37955925d2d3b2a527fb83c356ad653d9304
