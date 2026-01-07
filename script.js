// 1. Initialize Reveal (AOS)
AOS.init({ duration: 1000, once: true });

// 2. Custom Cursor Move
const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// 3. Typewriter Animation
const messages = ["Creative Web Developer", "UI/UX Designer", "AI Specialist"];
let msgIndex = 0;
let charIndex = 0;
const speed = 100;
const typeBox = document.getElementById("type-text");

function type() {
    if (charIndex < messages[msgIndex].length) {
        typeBox.textContent += messages[msgIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typeBox.textContent = messages[msgIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(type, 500);
    }
}
window.onload = type;

// 4. Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40 },
        "color": { "value": "#00f2ff" },
        "opacity": { "value": 0.2 },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00f2ff", "opacity": 0.1, "width": 1 },
        "move": { "enable": true, "speed": 1.5 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    }
});
