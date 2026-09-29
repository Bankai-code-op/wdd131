const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    menuToggle.textContent = "❌";
  } else {
    menuToggle.textContent = "☰";
  }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2022, May, 22",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  }
];

function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const name = document.createElement("h3");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

  const dedication = document.createElement("p");
  dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

  const img = document.createElement("img");
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} Temple`);
  img.setAttribute("loading", "lazy");
  img.setAttribute("width", "400");
  img.setAttribute("height", "250");

  figure.appendChild(img);
  figure.appendChild(name);
  figure.appendChild(location);
  figure.appendChild(dedication);
  figure.appendChild(area);

  return figure;
}

function displayTemples(templesList) {
  const main = document.querySelector("main");
  const existingFigures = main.querySelectorAll("figure");
  existingFigures.forEach(f => f.remove());

  templesList.forEach(temple => {
    main.appendChild(createTempleCard(temple));
  });
}

displayTemples(temples);

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const filterText = e.target.textContent;
    document.querySelector("main h1").textContent = filterText;

    let filtered = temples;

    if (filterText === "Old") {
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    } else if (filterText === "New") {
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    } else if (filterText === "Large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (filterText === "Small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    displayTemples(filtered);
  });
});