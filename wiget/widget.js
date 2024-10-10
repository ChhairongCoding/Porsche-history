function hamburgerMenu() {
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const list = document.getElementById("list");
  const hamburgerMenuClose = document.getElementById("hamburgerMenuClose");

  hamburgerMenu.addEventListener("click", () => {
    list.style.left = "0px";
    hamburgerMenuClose.style.left = "380px";
  });

  hamburgerMenuClose.addEventListener("click", () => {
    list.style.left = "";
    hamburgerMenuClose.style.left = "";
  });
}

hamburgerMenu();

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
