/* JavaScript File (script.js) */
const dateTimeElement = document.getElementById('dateTime');

function updateDateTime() {
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
updateDateTime();

const celebrateBtn = document.getElementById('celebrateBtn');
const wishBtn = document.getElementById('wishBtn');
const revealBtn = document.getElementById('revealBtn');

const wishPopup = document.getElementById('wishPopup');
const revealPopup = document.getElementById('revealPopup');

const confettiCanvas = document.getElementById('confetti-canvas');
const confetti = new ConfettiGenerator({ target: 'confetti-canvas' });

celebrateBtn.addEventListener('click', () => {
    confetti.render();
    setTimeout(() => confetti.clear(), 25505555);
});

wishBtn.addEventListener('click', () => {
    wishPopup.style.display = 'block';
});

revealBtn.addEventListener('click', () => {
    revealPopup.style.display = 'block';
});

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() < 10) {
        confetti.render();
    } else {
        confetti.clear();
    }
}, 1000);
