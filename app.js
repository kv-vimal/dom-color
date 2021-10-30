 let colors = ["red", "blue", "orange", "green", "yellow", "indigo", "violet"];

let container = document.querySelector("#container");
let h1 = document.querySelector("h1");

let clickedcolor = document.querySelector("#clickedcolor");

for (const color of colors) {
  let box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
  box.style.backgroundColor = color;
  box.addEventListener("click", function () {
    h1.innerHTML = "You have selected";
    clickedcolor.innerHTML = color;
    clickedcolor.style.backgroundColor = color;
  });
}
