// Existing Water Tracker Code
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

const highlightCups = (index) => {
  if (index === 7 && smallCups[index].classList.contains("full")) index--;
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) cup.classList.add("full");
    else cup.classList.remove("full");
  });
  updateBigCup();
};

smallCups.forEach((cup, index) =>
  cup.addEventListener("click", () => highlightCups(index))
);

updateBigCup();

// Sleep Tracker Code
let sleepGoal = 8;
let hoursSlept = 0;

function updateSleep() {
    const sleepInput = document.getElementById('sleep-input').value;
    const sleepMessage = document.getElementById('sleep-message');

    if (sleepInput && sleepInput >= 0 && sleepInput <= 24) {
        hoursSlept = parseFloat(sleepInput);
        document.getElementById('hours-slept').textContent = hoursSlept;
        const remaining = Math.max(sleepGoal - hoursSlept, 0);
        document.getElementById('remaining-sleep').textContent = remaining;

        if (remaining > 0) {
            sleepMessage.textContent = `You need ${remaining} more hours to reach your goal.`;
        } else {
            sleepMessage.textContent = "Great job! You've reached your sleep goal!";
        }
    } else {
        sleepMessage.textContent = "Please enter a valid number of hours (0-24).";
    }
}
