const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

// Update the big cup based on the number of small cups filled
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

// Highlight the cups based on how many have been selected
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

// Add event listener to each small cup
smallCups.forEach((cup, index) =>
  cup.addEventListener("click", () => highlightCups(index))
);

updateBigCup();

// Premium button redirect to login page
const premiumBtn = document.getElementById('premium-btn');
premiumBtn.addEventListener('click', () => {
  window.location.href = 'login.html'; // Redirect to login page
});
