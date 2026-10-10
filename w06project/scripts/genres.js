const genres = [
    {
        name: "Boom Bap",
        group: "hip-hop",
        region: "New York and the East Coast of the United States",
        era: "Late 1980s and early 1990s",
        tempo: "About 85 to 95 BPM",
        sound: "The name imitates the kick drum (the boom) and the snare drum (the bap). Beats are built on hard, punchy drums with a swing feel and dusty sampled loops chopped from old jazz, soul, and funk records.",
        tryThis: "Set your tempo near 90 BPM, put the kick on beats 1 and 3 and the snare on beats 2 and 4, then add a little swing."
    },
    {
        name: "Trap",
        group: "hip-hop",
        region: "Atlanta, Georgia, and the American South",
        era: "The 1990s, with the modern sound taking shape in the late 1990s and early 2000s",
        tempo: "Often programmed near 140 BPM, but it feels like 70 because the beat is in half-time",
        sound: "Trap is built on deep 808 bass, fast hi-hat rolls, and hard, crisp snares. The 808 sound comes from the Roland TR-808 drum machine.",
        tryThis: "Program the beat at about 140 BPM with the snare on the third beat of the bar, then vary your hi-hat rolls so no two bars are the same."
    },
    {
        name: "Afrobeats",
        group: "african",
        region: "Nigeria and Ghana",
        era: "The 2000s and 2010s",
        tempo: "About 100 to 130 BPM",
        sound: "Afrobeats is an umbrella name for contemporary West African pop. It blends highlife, dancehall, hip-hop, and R&B into a percussion-driven, melodic sound. It is not the same as Afrobeat, the style Fela Kuti created in Lagos in the late 1960s.",
        tryThis: "Start between 100 and 110 BPM, build the groove from several layers of percussion, then add a melody on top."
    },
    {
        name: "Amapiano",
        group: "african",
        region: "The townships of Gauteng, South Africa, around Pretoria and Johannesburg",
        era: "The mid-2010s",
        tempo: "About 110 to 115 BPM",
        sound: "Amapiano blends deep house, jazz, and kwaito into a laid-back groove. Its signature sound is the log drum, a synthesized, percussive bass that gives the music its bounce.",
        tryThis: "Start near 110 BPM, add a log drum sound, and place its notes so they bounce in the gaps between your kick hits."
    }
];

const cardList = document.getElementById("card-list");
const resultCount = document.getElementById("result-count");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderGenres(items) {
    cardList.innerHTML = items
        .map((genre) => `
            <article class="info-card">
                <h2>${genre.name}</h2>
                <p class="info-type">${genre.region}. ${genre.era}.</p>
                <p>${genre.sound}</p>
                <p class="info-note"><strong>Typical tempo:</strong> ${genre.tempo}</p>
                <p class="info-note"><strong>Try this:</strong> ${genre.tryThis}</p>
            </article>
        `)
        .join("");

    const label = items.length === 1 ? "genre" : "genres";
    resultCount.textContent = `Showing ${items.length} ${label}`;
}

function filterGenres(group) {
    if (group === "all") {
        renderGenres(genres);
    } else {
        renderGenres(genres.filter((genre) => genre.group === group));
    }
}

function setActiveButton(activeButton) {
    filterButtons.forEach((button) => {
        const isActive = button === activeButton;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterGenres(button.dataset.group);
        setActiveButton(button);
    });
});

renderGenres(genres);
