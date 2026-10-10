const steps = [
    {
        id: 1,
        title: "Choose a tempo",
        description: "Tempo is how fast your beat plays, measured in beats per minute (BPM). Set it first, because every other sound is placed against it. Slower tempos feel relaxed and heavy, and faster tempos feel energetic."
    },
    {
        id: 2,
        title: "Program the drums",
        description: "Start with the kick and snare, because they set the groove. Then add hi-hats to give the beat motion. Put the snare on the backbeat, and try moving a few hits slightly off the grid so the rhythm feels human."
    },
    {
        id: 3,
        title: "Add a bassline",
        description: "The bass sits low and locks in with the kick drum. Follow the rhythm of the kick at first and keep the notes simple. A clear bassline gives the beat its weight."
    },
    {
        id: 4,
        title: "Create a melody or choose a sample",
        description: "Add chords, a lead melody, or a sample to give the beat its mood. If you use a sample, choose material you have the right to use, because samples from commercial songs usually need clearance before you release a track."
    },
    {
        id: 5,
        title: "Arrange the beat",
        description: "A loop is not yet a song. Copy your pattern along the timeline and change it: drop the drums out for an intro, bring everything in for the hook, and pull parts out for breaks. A change every four or eight bars keeps listeners interested."
    },
    {
        id: 6,
        title: "Mix the sounds",
        description: "Set the volume of each sound so nothing hides another. Use EQ to remove frequencies that clash, and use panning to spread sounds between the left and right speakers. Check your mix on headphones and on a speaker."
    },
    {
        id: 7,
        title: "Export the beat",
        description: "Render your project to an audio file. Choose WAV for the highest quality, or MP3 when you need a smaller file to share. Save your project file too, so you can return to the beat later."
    }
];

const STORAGE_KEY = "beatcraft-completed-steps";

const stepList = document.getElementById("step-list");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const resetButton = document.getElementById("reset-progress");

function getCompleted() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}

function saveCompleted(ids) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (error) {
        console.warn(`Progress could not be saved: ${error.message}`);
    }
}

function updateProgress(completed) {
    const total = steps.length;
    progressBar.value = completed.length;

    if (completed.length === total) {
        progressText.textContent = `All ${total} steps complete. You have been through the whole process.`;
    } else {
        progressText.textContent = `${completed.length} of ${total} steps complete`;
    }
}

function renderSteps() {
    const completed = getCompleted();

    stepList.innerHTML = steps
        .map((step) => {
            const isDone = completed.includes(step.id);
            return `
                <li class="step${isDone ? " done" : ""}">
                    <input type="checkbox" id="step-${step.id}" data-id="${step.id}" aria-describedby="step-${step.id}-desc" ${isDone ? "checked" : ""}>
                    <div>
                        <label for="step-${step.id}">Step ${step.id}: ${step.title}</label>
                        <p id="step-${step.id}-desc">${step.description}</p>
                    </div>
                </li>
            `;
        })
        .join("");

    updateProgress(completed);
}

function toggleStep(id, isChecked) {
    const completed = getCompleted();
    const updated = isChecked
        ? [...new Set([...completed, id])]
        : completed.filter((savedId) => savedId !== id);

    saveCompleted(updated);
    updateProgress(updated);
}

stepList.addEventListener("change", (event) => {
    if (event.target.matches("input[type='checkbox']")) {
        const id = Number(event.target.dataset.id);
        toggleStep(id, event.target.checked);
        event.target.closest(".step").classList.toggle("done", event.target.checked);
    }
});

resetButton.addEventListener("click", () => {
    saveCompleted([]);
    renderSteps();
});

renderSteps();
