// contact form
const form = document.querySelector(".wrapper");
const btnCloseForm = document.querySelector(".close-modal");
const openForm = document.querySelector(".contact-us");

const btnOpenForm = function () {
  form.classList.remove("hidden-form");
};

const closeForm = function () {
  form.classList.add("hidden-form");
};

btnCloseForm.addEventListener("click", closeForm);
openForm.addEventListener("click", btnOpenForm);

// pressing esc to close the modal;
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !form.classList.contains("hidden-form")) {
    closeForm();
  }
});

// sandwich button nav bar

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  console.log();

  if (menuMobile.classList.contains("open-menu")) {
    menuMobile.classList.remove("open-menu");
  } else {
    menuMobile.classList.add("open-menu");
  }
}

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
