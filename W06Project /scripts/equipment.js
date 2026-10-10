const gear = [
    {
        name: "FL Studio",
        category: "software",
        type: "DAW (paid, free trial available)",
        bestFor: "Programming drums and building beats pattern by pattern",
        description: "A digital audio workstation built around a step sequencer, which makes it quick to lay down drum patterns. The free trial has every feature and no time limit, but it cannot reopen saved projects."
    },
    {
        name: "Ableton Live",
        category: "software",
        type: "DAW (paid, 30-day free trial)",
        bestFor: "Loop-based and electronic production",
        description: "A DAW designed around loops and live performance. Its Session View lets you try ideas quickly before arranging them into a full track."
    },
    {
        name: "GarageBand",
        category: "software",
        type: "DAW (free on Apple devices)",
        bestFor: "Absolute beginners on a Mac, iPhone, or iPad",
        description: "Apple's free music app. It includes built-in instruments and loops, so you can finish a simple beat without buying anything."
    },
    {
        name: "Cakewalk Sonar",
        category: "software",
        type: "DAW (free tier, Windows)",
        bestFor: "Windows users who want a full DAW without paying up front",
        description: "The successor to Cakewalk by BandLab. It has a free tier that needs a free BandLab account, and some extra features come with a paid BandLab Membership."
    },
    {
        name: "Akai MPK Mini",
        category: "controllers",
        type: "MIDI keyboard with drum pads",
        bestFor: "Playing melodies and finger-drumming",
        description: "A compact 25-key keyboard with velocity-sensitive pads and knobs. The pads let you tap out drum patterns instead of clicking them in with a mouse."
    },
    {
        name: "Arturia MiniLab",
        category: "controllers",
        type: "MIDI keyboard with pads and knobs",
        bestFor: "Playing melodies with hands-on control of your software",
        description: "A compact 25-key keyboard with eight pads, eight knobs, and four faders for controlling your software, such as plug-in settings and track volume."
    },
    {
        name: "Audio-Technica ATH-M50x",
        category: "audio",
        type: "Closed-back studio headphones",
        bestFor: "Blocking outside noise while you work",
        description: "Closed-back, over-ear headphones made for studio tracking and mixing. The closed design isolates outside noise and keeps sound from leaking out."
    },
    {
        name: "Sony MDR-7506",
        category: "audio",
        type: "Closed-back studio headphones",
        bestFor: "Recording, monitoring, and editing audio",
        description: "Large-diaphragm, foldable, closed-back headphones designed for professional studio and broadcast use, with a 40 mm driver for clear sound."
    },
    {
        name: "Focusrite Scarlett Solo",
        category: "audio",
        type: "USB audio interface",
        bestFor: "Recording vocals or an instrument into your computer",
        description: "An audio interface with one microphone input and one instrument input. It converts the sound from a microphone into a signal your computer can record."
    },
    {
        name: "Yamaha HS5",
        category: "audio",
        type: "Powered studio monitor",
        bestFor: "Hearing your mix accurately in a home studio",
        description: "A five-inch powered speaker designed to play sound back without adding extra color, so your mix sounds more honest on other speakers."
    }
];

const gearList = document.getElementById("gear-list");
const gearCount = document.getElementById("gear-count");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderGear(items) {
    gearList.innerHTML = items
        .map((item) => `
            <article class="gear-card">
                <h2>${item.name}</h2>
                <p class="gear-type">${item.type}</p>
                <p>${item.description}</p>
                <p class="gear-best"><strong>Best for:</strong> ${item.bestFor}</p>
            </article>
        `)
        .join("");

    const label = items.length === 1 ? "item" : "items";
    gearCount.textContent = `Showing ${items.length} ${label}`;
}

function filterGear(category) {
    if (category === "all") {
        renderGear(gear);
    } else {
        renderGear(gear.filter((item) => item.category === category));
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
        filterGear(button.dataset.category);
        setActiveButton(button);
    });
});

renderGear(gear);
