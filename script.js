// reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".fade-in");

  reveals.forEach((reveal) => {
    let windowheight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowheight - revealPoint) {
      reveal.classList.add("active-fade-in");
    } else {
      reveal.classList.remove("active-fade-in");
    }
  });
  s;
}

// mobibe menu
const hamburger = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
