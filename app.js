const slides = [...document.getElementsByClassName("slides")];
const slider = document.getElementById("slider");
const dotsItems = document.getElementById("dots");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const dot = document.getElementById(".dot");
let counter = 0;

left.addEventListener("click", () => prevSlide());
right.addEventListener("click", () => nextSlide());

function nextSlide() {
  counter++;

  if (counter === slides.length) {
    counter = 0;
  }

  slides.forEach((el) => el.classList.add("none"));

  slides[counter].classList.remove("none");
}

function prevSlide() {
  if (counter === 0) {
    counter = slides.length;
  }
  counter--;

  slides.forEach((el) => el.classList.add("none"));
  slides[counter].classList.remove("none");
}

const dots = [];

for (let i = 0; i < slides.length; i++) {
  const div = document.createElement("div");
  div.id = i;
  div.classList.add("dot");

  dots.push(div);
}

dots.forEach((el) => dotsItems.appendChild(el));

dots.forEach((el) =>
  el.addEventListener("click", function (e) {
    slides.forEach((el) => el.classList.add("none"));

    slides[e.target.id].classList.remove("none");
  })
);
