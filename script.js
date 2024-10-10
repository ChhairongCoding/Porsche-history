document.addEventListener("DOMContentLoaded", () => {});

function hamburgerMenu() {
  const hamburgerMenuClose = document.getElementById("hamburgerMenuClose");
  const body = document.getElementById("body");
  document.getElementById("hamburgerMenu").addEventListener("click", () => {
    const list = document.getElementById("list");
    list.style.left = "0";
    body.style.opacity = "30%";
    hamburgerMenuClose.style.left = "370px";
  });

  hamburgerMenuClose.addEventListener("click", () => {
    list.style.left = "";
    hamburgerMenuClose.style.left = "";
    body.style.opacity = "1";
  });

  window.addEventListener("scroll", () => {
    const leftToRight = document.getElementById("leftToRight");
    let value = window.scrollY;

    leftToRight.style.left = value * 0.2 + "px";
  });
}

hamburgerMenu();

const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
