const planetData = {
  mercury: {
    name: "Mercury",
    description:
      "Mercury is the closest planet to the Sun and the smallest in the Solar System.",
    speed: "47.87 km/s",
    distance: "77 million km",
    diameter: "4,879 km",
    moons: "0",
    dayLength: "58.6 Earth days",
    yearLength: "88 Earth days",
  },
  venus: {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun and has a thick, toxic atmosphere.",
    speed: "35.02 km/s",
    distance: "41 million km",
    diameter: "12,104 km",
    moons: "0",
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
  },
  earth: {
    name: "Earth",
    description: "Earth is the only known planet to support life.",
    speed: "29.78 km/s",
    distance: "0 km",
    diameter: "12,742 km",
    moons: "1",
    dayLength: "24 hours",
    yearLength: "365.25 days",
  },
  mars: {
    name: "Mars",
    description:
      "Mars is known as the Red Planet and may have supported microbial life in the past.",
    speed: "24.07 km/s",
    distance: "78 million km",
    diameter: "6,779 km",
    moons: "2",
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
  },
  jupiter: {
    name: "Jupiter",
    description: "The largest planet, a gas giant with a Great Red Spot.",
    speed: "13.07 km/s",
    distance: "628 million km",
    diameter: "139,820 km",
    moons: "95",
    dayLength: "9.9 hours",
    yearLength: "12 Earth years",
  },
  saturn: {
    name: "Saturn",
    description: "Famous for its stunning rings and many moons.",
    speed: "9.68 km/s",
    distance: "1.2 billion km",
    diameter: "116,460 km",
    moons: "146",
    dayLength: "10.7 hours",
    yearLength: "29.5 Earth years",
  },
  uranus: {
    name: "Uranus",
    description: "An ice giant with a tilted rotation axis.",
    speed: "6.80 km/s",
    distance: "2.6 billion km",
    diameter: "50,724 km",
    moons: "27",
    dayLength: "17.2 hours",
    yearLength: "84 Earth years",
  },
  neptune: {
    name: "Neptune",
    description: "The windiest planet with supersonic storms.",
    speed: "5.43 km/s",
    distance: "4.3 billion km",
    diameter: "49,244 km",
    moons: "14",
    dayLength: "16.1 hours",
    yearLength: "165 Earth years",
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const planetButtons = document.querySelector(".planet-buttons");
const infoPanel = document.querySelector(".info-panel");
const backButton = document.querySelector(".back-button");

const isMobile = () => window.innerWidth <= 768;

const updateButtonVisibility = () => {
  if (isMobile()) {
    const isInfoPanelVisible = infoPanel.classList.contains("visible");
    menuToggle.classList.toggle("hidden", isInfoPanelVisible);
  } else {
    menuToggle.classList.toggle("hidden", false);
  }
};

menuToggle.addEventListener("click", () => {
  if (isMobile()) {
    planetButtons.classList.toggle("visible");
    infoPanel.classList.remove("visible");
    menuToggle.textContent = planetButtons.classList.contains("visible")
      ? "✕"
      : "☰";
    updateButtonVisibility();
  } else {
    planetButtons.classList.toggle("visible");
    menuToggle.textContent = planetButtons.classList.contains("visible")
      ? "✕"
      : "☰";
  }
});

backButton.addEventListener("click", () => {
  document.querySelectorAll(".planet").forEach((planet) => {
    planet.classList.remove("selected");
  });

  if (isMobile()) {
    infoPanel.classList.remove("visible");
    planetButtons.classList.add("visible");
    menuToggle.textContent = "✕";
    updateButtonVisibility();
  } else {
    infoPanel.classList.remove("visible");
  }
});

document.querySelectorAll(".planet-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove selected class from all planets
    document.querySelectorAll(".planet").forEach((planet) => {
      planet.classList.remove("selected");
    });

    const planetKey = button.classList[1].replace("-button", "");
    const data = planetData[planetKey];
    if (data) {
      // Add selected class to the clicked planet
      const selectedPlanet = document.querySelector(`.${planetKey}`);
      if (selectedPlanet) {
        selectedPlanet.classList.add("selected");
      }

      nameEl.textContent = data.name;
      descEl.textContent = data.description;
      speedEl.textContent = data.speed;
      distEl.textContent = data.distance;
      diaEl.textContent = data.diameter;
      moonsEl.textContent = data.moons;
      dayEl.textContent = data.dayLength;
      yearEl.textContent = data.yearLength;

      if (isMobile()) {
        planetButtons.classList.remove("visible");
        infoPanel.classList.add("visible");
        updateButtonVisibility();
      } else {
        infoPanel.classList.add("visible");
      }
    }
  });
});

document.addEventListener("click", (event) => {
  if (!isMobile()) {
    const isClickInsidePanel =
      planetButtons.contains(event.target) ||
      infoPanel.contains(event.target) ||
      menuToggle.contains(event.target) ||
      backButton.contains(event.target);

    if (!isClickInsidePanel) {
      document.querySelectorAll(".planet").forEach((planet) => {
        planet.classList.remove("selected");
      });
    }
  } else {
    const isClickInsidePanel =
      planetButtons.contains(event.target) ||
      infoPanel.contains(event.target) ||
      menuToggle.contains(event.target) ||
      backButton.contains(event.target);

    if (!isClickInsidePanel) {
      planetButtons.classList.remove("visible");
      infoPanel.classList.remove("visible");
      menuToggle.textContent = "☰";
      document.querySelectorAll(".planet").forEach((planet) => {
        planet.classList.remove("selected");
      });
      updateButtonVisibility();
    }
  }
});

window.addEventListener("resize", () => {
  updateButtonVisibility();

  if (!isMobile()) {
    return;
  }

  planetButtons.classList.remove("visible");
  infoPanel.classList.remove("visible");
  menuToggle.textContent = "☰";
});

updateButtonVisibility();

const nameEl = document.querySelector(".planet-name");
const descEl = document.querySelector(".planet-description");
const speedEl = document.querySelector(".planet-speed");
const distEl = document.querySelector(".planet-distance");
const diaEl = document.querySelector(".planet-diameter");
const moonsEl = document.querySelector(".planet-moons");
const dayEl = document.querySelector(".planet-day");
const yearEl = document.querySelector(".planet-year");

const starsContainer = document.getElementById("stars-container");
const totalStars = 200;

for (let i = 0; i < totalStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 4 + 1.5}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  star.dataset.parallax = Math.random() * 3 + 1;
  starsContainer.appendChild(star);
}

const titleText = "Solar System";
const titleElement = document.getElementById("typing-title");

let index = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    if (index < titleText.length) {
      titleElement.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeLoop, 150);
    } else {
      setTimeout(() => {
        isDeleting = true;
        typeLoop();
      }, 6000);
    }
  } else {
    if (index > 0) {
      titleElement.textContent = titleText.substring(0, index - 1);
      index--;
      setTimeout(typeLoop, 100);
    } else {
      isDeleting = false;
      setTimeout(typeLoop, 1000);
    }
  }
}

typeLoop();
