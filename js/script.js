  let navbar = document.querySelector(".header .navbar");

  let menu = document.querySelector("#menu-btn");
  menu.onclick = () => {
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    navbar.classList.remove("active");
  };

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  sr.reveal(".header");
  sr.reveal(".banner", { delay: 700 });
  sr.reveal(".service", { delay: 900 });
  sr.reveal(".box,.heading", { delay: 900 });
  sr.reveal(".articles", { delay: 1000 });
  sr.reveal(".footer", { delay: 1500, origin: "bootom" });