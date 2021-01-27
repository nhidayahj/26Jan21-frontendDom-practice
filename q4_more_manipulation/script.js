// document.querySelector("h1").style.color = "green";

// document.querySelector("li.finished").innerText = "Repay credit card debt";

// let urgentItem = document.querySelector("li#urgent");
// urgentItem.style.borderWidth = "2px";
// urgentItem.style.borderColor = "black";

// document.querySelector(".emphasis").style.textDecoration = "underline";

// let emphasis = document.querySelector("p.emphasis");
// emphasis.style.backgroundColor = "orange";
// emphasis.style.fontSize = "32px";
// emphasis.style.lineHeight = "24px";

// document.querySelector("li#urgent span.todo").style.backgroundColor = "yellow";

// document.querySelector("h2").innerHTML =
//   "<span class='greetings'>About Us</span>";
console.log("-------------------------");

//Q1. Select the first <h1> element in the list. Change it so that it now displays in green color.
document.querySelector("h1").style.color = "green";

//Q2. Change the text of the first <li class="finished"> to the string "Repay credit card debt"
document.querySelector("li.finished").innerHTML = "Repay credit card debt";

// Q3. Select the element <li id="urgent">, and give it a black coloured border that has a width of '2px'. Hint: Check the border-color and the border-width css properties on a web page.
let urgent = document.querySelector("#urgent");
urgent.style.borderStyle = "solid";
urgent.style.borderWidth = "2px";

// Q4. Change the first element with the class emphasis such that it is underlined (check out the text decoration css style online)
document.querySelector(".emphasis").style.textDecorationLine = "underline";

//Q5. Select first element with <p class='emphasis'> and change its background color to orange, its font size to "32px" and its line height to be "24px".
let p_emphasis = document.querySelector("p.emphasis");
p_emphasis.style.backgroundColor = "orange";
p_emphasis.style.fontSize = "32px";
p_emphasis.style.lineHeight = "24px";

// Q6. Select the <span class="todo"> which is nested inside the <li id="urgent"> and give it a background color of 'yellow'
let todos = document.querySelectorAll("span.todo");
//console.log(todos);
todos[1].style.backgroundColor = "yellow";

//Q7. Change the first <h2> element such that it contains another element <span class="greetings">About Us</span> instead.
document.querySelector("h2").innerHTML =
  "<span class='greetings'>About Us</span>";
