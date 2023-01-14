// Collapse navbar when clicked any link to section
const navLinks = document.querySelectorAll("#mobile-nav > a");
navLinks.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    document.querySelector(".hamburguer").classList.toggle("active");
    document.querySelector("#mobile-nav").classList.toggle("active");
  });
});

// Scroll into view
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault;
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Burguer menu
const burguerMenu = document.querySelector(".hamburguer");
burguerMenu.addEventListener("click", () => {
  burguerMenu.classList.toggle("active");
  document.querySelector("#mobile-nav").classList.toggle("active");
});

// Dark mode
const darkSwitch = document.querySelector("#dark-mode");
darkSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// Navbar scroll
let lastScroll = 0;
const navbar = document.querySelector("#header");

window.addEventListener("scroll", () => {
  let actualScroll = window.scrollY;
  if (actualScroll > lastScroll) {
    navbar.style.transform = "translateY(-500px)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScroll = window.scrollY;
});
