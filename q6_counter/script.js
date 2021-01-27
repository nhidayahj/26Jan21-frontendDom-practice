let addBtn = document.querySelector("#increment");

let numBox = document.querySelector("#box");
let numInBox = parseInt(numBox.innerText);
let setCounter = -1;

addBtn.addEventListener("click", function () {
  numInBox++;
  numBox.innerText = numInBox;
  if (numInBox > 10) {
    numBox.innerText = 0;
    numInBox = setCounter;
    numInBox++;
  }
});

let decreaseBtn = document.querySelector("#decrement");
decreaseBtn.addEventListener("click", function () {
  numInBox--;
  numBox.innerText = numInBox;
  if (numInBox <= -1) {
    numBox.innerText = 0;
    numInBox = setCounter;
  }
});

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
  numInBox = 0;
  numBox.innerText = numInBox;
});
