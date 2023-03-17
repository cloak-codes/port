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
