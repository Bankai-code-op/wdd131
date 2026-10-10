const form = document.getElementById("contact-form");
const nameField = document.getElementById("name");
const messageField = document.getElementById("message");
const counter = document.getElementById("message-counter");
const confirmation = document.getElementById("confirmation");
const confirmationTitle = document.getElementById("confirmation-title");
const confirmationDetails = document.getElementById("confirmation-details");
const sendAnotherButton = document.getElementById("send-another");

const maxLength = messageField.maxLength;

function updateCounter() {
    const used = messageField.value.length;
    counter.textContent = `${used} of ${maxLength} characters used`;
    counter.classList.toggle("near-limit", maxLength - used <= 50);
}

function getEntries(data) {
    const topicLabel = form.elements.topic.selectedOptions[0].textContent;

    return [
        ["Name", data.get("name").trim()],
        ["Email", data.get("email").trim()],
        ["Topic", topicLabel],
        ["Experience", data.get("experience")],
        ["Message", data.get("message").trim()]
    ];
}

function showConfirmation(data) {
    confirmationTitle.textContent = `Thank you, ${data.get("name").trim()}!`;
    confirmationDetails.replaceChildren();

    getEntries(data).forEach(([label, value]) => {
        const term = document.createElement("dt");
        const detail = document.createElement("dd");
        term.textContent = label;
        detail.textContent = value;
        confirmationDetails.append(term, detail);
    });

    form.hidden = true;
    confirmation.hidden = false;
    confirmationTitle.focus();
}

function resetForm() {
    form.reset();
    updateCounter();
    confirmation.hidden = true;
    form.hidden = false;
    nameField.focus();
}

messageField.addEventListener("input", updateCounter);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    showConfirmation(new FormData(form));
});

sendAnotherButton.addEventListener("click", resetForm);

updateCounter();
