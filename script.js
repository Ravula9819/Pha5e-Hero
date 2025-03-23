// script.js
document.addEventListener("mousemove", (e) => {
    const background = document.querySelector(".background");
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    background.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
});
