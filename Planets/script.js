"use strict";

const planets = [
  {
    id: 1,
    title: "The Earth",
    type: "terrestrial",
    img: "./images/The Earth.jpg",
    desc: "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life.",
  },
  {
    id: 2,
    title: "Jupiter",
    type: "gas giant",
    img: "./images/Jupiter.jpg",
    desc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
  },
  {
    id: 3,
    title: "Eris",
    type: "dwarf",
    img: "./images/Eris.jpg",
    desc: "Eris is the most massive and second-largest known dwarf planet in the Solar System.",
  },
  {
    id: 4,
    title: "Mercury",
    type: "terrestrial",
    img: "./images/Mercury.jpg",
    desc: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days.",
  },
  {
    id: 5,
    title: "Makemake",
    type: "dwarf",
    img: "./images/Makemake.jpg",
    desc: "Makemake is a likely dwarf planet and perhaps the second-largest Kuiper belt object in the classical population, with a diameter approximately two-thirds that of Pluto.",
  },
  {
    id: 6,
    title: "Haumea",
    type: "dwarf",
    img: "./images/Haumea.jpg",
    desc: "Haumea is a likely dwarf planet located beyond Neptune's orbit.",
  },
  {
    id: 7,
    title: "Venus",
    type: "terrestrial",
    img: "./images/Venus.jpg",
    desc: "Venus is the second planet from the Sun. As the brightest natural object in Earth's night sky after the Moon.",
  },
  {
    id: 8,
    title: "Saturn",
    type: "gas giant",
    img: "./images/Saturn.jpg",
    desc: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",
  },
  {
    id: 9,
    title: "Mars",
    type: "terrestrial",
    img: "./images/Mars.jpg",
    desc: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",
  },
  {
    id: 10,
    title: "Pluto",
    type: "dwarf",
    img: "./images/Pluto.jpg",
    desc: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune.",
  },
  {
    id: 11,
    title: "Ceres",
    type: "dwarf",
    img: "./images/Ceres.jpg",
    desc: "Ceres is the largest astronomical object in the asteroid belt between the orbits of Mars and Jupiter.",
  },
  {
    id: 12,
    title: "Uranus",
    type: "jovian",
    img: "./images/nasaU.jpg",
    desc: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
  },
  {
    id: 13,
    title: "Neptune",
    type: "jovian",
    img: "./images/Neptune.jpg",
    desc: "Neptune is the eighth and farthest known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
  },
];

const infoContainer = document.querySelector(".info-container");
const btnContainer = document.querySelector(".btns");

window.addEventListener("DOMContentLoaded", function () {
  displayPlanetItems(planets);
  displayPlanetButtons();
});

function displayPlanetItems(planetItems) {
  let displayPlanet = planetItems.map(function (item) {
    return `<article class="planet-item">
        <img src="${item.img}" class="photo" />
        <div class="planet-info">
          <header>
            <h4>${item.title}</h4>
          </header>
          <p class="planet-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayPlanet = displayPlanet.join(" ");
  infoContainer.innerHTML = displayPlanet;
}

function displayPlanetButtons() {
  const types = planets.reduce(
    function (values, item) {
      if (!values.includes(item.type)) {
        values.push(item.type);
      }
      return values;
    },
    ["all"]
  );
  const typeBtns = types
    .map(function (type) {
      return `<button class="filter-btn" data-id="${type}">${type}</button>`;
    })
    .join("");
  btnContainer.innerHTML = typeBtns;
  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const type = e.currentTarget.dataset.id;
      const planetType = planets.filter(function (planetItem) {
        if (planetItem.type === type) {
          return planetItem;
        }
      });
      if (type === "all") {
        displayPlanetItems(planets);
      } else {
        displayPlanetItems(planetType);
      }
    });
  });
}
