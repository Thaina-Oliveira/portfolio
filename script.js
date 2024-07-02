// reveal elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".fade-in");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// mobibe menu
const hamburger = document.querySelector(".hamburger");

const offScreenMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
