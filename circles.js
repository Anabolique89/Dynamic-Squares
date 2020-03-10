"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
	for (let i = 0; i < 200; i++) {
		createCircle();
	}
}

function createCircle() {
	const addCircle = document.createDocumentFragment();
	let newCircle = document.createElement("circle");
	newCircle.className = "circle";
	newCircle.setAttribute("class", "circle");
	newCircle.style.backgroundColor = randomColor();
	addCircle.appendChild(newCircle);
	document.getElementById("circle").appendChild(newCircle);
	newCircle.style.cx = Math.floor(Math.random() * 100);
	newCircle.style.cy = Math.floor(Math.random() * 100);
	newCircle.style.r = Math.floor(Math.random() * 50);
	/*
	newCircle.style.ry = Math.floor(Math.random() * 40);
	newCircle.style.rx = Math.floor(Math.random() * 50); */
}

createCircle(randomColor);

function randomColor() {
	let num = Math.round(0xffffff * Math.random());
	let r = num >> 16;
	let g = (num >> 8) & 255;
	let b = num & 255;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (let i = 0; i < 40; i++) {
	console.log(randomColor());
}
