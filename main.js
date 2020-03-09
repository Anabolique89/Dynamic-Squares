"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  for (let i = 0; i < 200; i++) {
    createSquare();
  }
}
function createSquare() {
  const addSquare = document.createDocumentFragment();
  let newSquare = document.createElement("div");
  newSquare.className = "square";
  newSquare.setAttribute("class", "square");
  newSquare.style.backgroundColor = randomColor();
  addSquare.appendChild(newSquare);
  document.getElementById("square").appendChild(newSquare);
  newSquare.style.top = Math.floor(Math.random() * 700) + "px";
  newSquare.style.left = Math.floor(Math.random() * 700) + "px";
}

createSquare(randomColor);

function randomColor() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (var i = 0; i < 40; i++) {
  console.log(randomColor());
}
