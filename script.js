// background blob

const blob = document.getElementById("blob");
document.body.onmousemove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

// glitchy text effect

function letterScramble(event) {
  let iteration = 1;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = letterScramble;
document.getElementById("big-text").onmouseover = letterScramble;
document.getElementById("contact-me-title").onmouseover = letterScramble;
document.getElementById("projects-title").onmouseover = letterScramble;


// Dark Mode

const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.querySelector("body");
const moonIcon = document.querySelector(".fa-moon");
const links = document.querySelectorAll(".links");

links.forEach((link) => {
  link.style.color = "#313334";
});

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    body.style.backgroundColor = "#313334";
    body.style.Color = "#faf9f6";
    document.getElementById("dark-mode-btn").style.color = "#faf9f6";
    document.getElementById("dark-mode-btn").style.backgroundColor = "#313334";
    document.getElementById("dark-mode-btn").style.borderColor = "#faf9f6";
    links.forEach((link) => {
      link.style.color = "#faf9f6";
    });
  } else {
    body.style.backgroundColor = "#faf9f6";
    body.style.Color = "#313334";
    document.getElementById("dark-mode-btn").style.color = "#313334";
    document.getElementById("dark-mode-btn").style.backgroundColor = "#faf9f6";
    document.getElementById("dark-mode-btn").style.borderColor = "#313334";
    links.forEach((link) => {
      link.style.color = "#313334";
    });
  }
});

