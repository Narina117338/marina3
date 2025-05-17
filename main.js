let score = 0;
let activeMole = null;
const scoreDispley = document.getElementById("score");
const holes = document.querySelectorAll(".hole")

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const mole = document.createElement("div");
    mole.classList.add("mole");
    mole.onclick = catchMole;
    activeMole = randomHole();
    activeMole.appendChild(mole);
    mole.style.display = "block";

    setTimeout( () => {
        if (activeMole) {
            activeMole.removeChild(mole);
            activeMole = null;
        }
    }, 1000);
}

function catchMole() {
    score++;
    scoreDispley.textContent = `очки: ${score}`;
    if (activeMole) {
        activeMole.removeChild(this);
        activeMole = null;
    }
}

setInterval (showMole, 1500);