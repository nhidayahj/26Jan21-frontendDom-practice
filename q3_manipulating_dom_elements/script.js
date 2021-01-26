// PLACE YOUR CODE HERE
// document.querySelector('h1').innerText = "Hello world!";

// document.querySelector('span#important').style.backgroundColor = 'red';

// let todo = document.querySelector('li.todo');
// // => let todo = <HTMLLIElement>
// todo.style.fontFamily = 'Verdana';
// // => <HTMLLIElement>.style.fontFamily = "Verdana";
// todo.style.fontSize = '16px';

// Q1. Change the first <h1> element in the document to say "Hello world!"
document.querySelector("h1").innerText = "Hello World!";

// Q2. Change the background color of the first <span id="important"> in the document to 'red'
document.querySelector("span#important").style.backgroundColor = "red";

// Q3. Change the font family and font size of the first <li class="todo"> to be the font Verdana and font size '16px'.
document.querySelector("li.todo").style.fontFamily = "Verdana";
document.querySelector("li.todo").style.fontSize = "16px";

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
  module.exports = exports = { header, important, todo };
} catch (e) {}
