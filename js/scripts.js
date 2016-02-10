// the lines below are an example of something that works! Use it wisely
// // Gets the first h1 on the page
//     var newText = document.querySelector('h2');
//
//     // Updates the h1 to show 'How are you?'
//     newText.textContent = "What's up, Javascript??";

//change the color of the arrow on a mouseOver

var sectionJS = document.querySelector(".titleBox");
var arrowColorShift = document.querySelector(".icon");

sectionJS.addEventListener("mouseover", function () {
  arrowColorShift.style = "color:#003A6C";//changes the color of the arrow??
});

var showText = document.querySelector(".body");

sectionJS.addEventListener("click", function () {
  showText.style = "display:inline-block";//shows the paragraph upon a click of the section
});

// #003A6C
