document.addEventListener("DOMContentLoaded", () => {});

const hamburgerMenuClose = document.getElementById("hamburgerMenuClose");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const body = document.getElementById("body");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const logo = document.getElementById("logo");
const search = document.getElementById("search");
let isFalse = false;

hamburgerMenu.addEventListener("click", () => {
  if (!isFalse) {
    const list = document.getElementById("list");
    list.style.left = "0";
    body.style.opacity = "30%";
    body.style.filter = "blur(1.5rem)";
    logo.style.filter = "blur(1.5rem)";
    search.style.filter = "blur(1.5rem)";
    hamburgerMenu.style.left = "280px";
    hamburgerMenu.style.position = "relative";
    line2.style.display = "none";

    setTimeout(() => {
      line1.style.position = "absolute";
    }, 200);
    line1.style.transform = "rotate(50deg)";
    line3.style.transform = "rotate(-50deg)";

    isFalse = true;
  } else {
    list.style.left = "";
    hamburgerMenuClose.style.left = "";
    body.style.opacity = "1";
    hamburgerMenu.style.left = "0px";
    hamburgerMenu.style.position = "relative";
    line1.style.transform = "rotate(0)";
    line3.style.transform = "rotate(0)";
    line1.style.position = "relative";
    body.style.filter = "blur(0)";
    logo.style.filter = "blur(0)";
    search.style.filter = "blur(0)";

    setTimeout(() => {
      line2.style.display = "block";
    }, 400);

    isFalse = false;
  }
});

const dataCardService = [
  {
    id: 1,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
  {
    id: 2,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
  {
    id: 3,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
  {
    id: 4,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
  {
    id: 5,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
  {
    id: 6,
    img: "/images/slide/Porsche-premieres-4.jpg",
    name: "Range of Services",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsam, adipisci eum quos et quia dolorem qui totam, quasi cumque aut provident, natus eaque dignissimos libero aperiam labore laborum sint?",
    detail: "View service",
  },
];

const cards = document.getElementById("cards");

function card(data) {
  data.forEach((dataCard) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = dataCard.img;

    const titleElement = document.createElement("h3");
    titleElement.textContent = dataCard.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = dataCard.decript;

    const detailElement = document.createElement("a");
    detailElement.href = "#";
    detailElement.textContent = dataCard.detail;

    const btn = document.createElement("button");
    btn.textContent = dataCard.button;

    cardElement.appendChild(imgElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(descriptionElement);
    cardElement.appendChild(detailElement);

    cards.appendChild(cardElement);
  });
}

card(dataCardService);
