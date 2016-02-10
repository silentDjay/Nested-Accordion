// the lines below are an example of something that works! Use it wisely
// // Gets the first h1 on the page
//     var newText = document.querySelector('h2');
//
//     // Updates the h1 to show 'How are you?'
//     newText.textContent = "What's up, Javascript??";

//change the color of the arrow on a mouseOver

var sectionJS = document.querySelector(".titleBox");
var arrowColorShift = document.querySelector(".icon");
var showHideText = document.querySelector(".body");

sectionJS.addEventListener("click", function () {
  if (showHideText.style.display === ""){
    showHideText.style.display = "inline-block";//shows the text
    arrowColorShift.style.color = "#003A6C";
    }
  else if (showHideText.style.display === "inline-block"){
    showHideText.style.display = "";// hides the text
    arrowColorShift.style.color = "#9B8347";
  }
});

sectionJS.addEventListener("mouseover", function () {
  arrowColorShift.style.color = "#003A6C";
});

sectionJS.addEventListener("mouseout", function () {
  arrowColorShift.style.color = "#9B8347"; //changes back to gold
});
//this didn't work - mouseover doesn't have an 'end'
// sectionJS.addEventListener("mouseover", function () {
//   if (arrowColorShift.style.color === "#003A6C"){
//     arrowColorShift.style.color = "#9B8347";//changes the color of the arrow upon a mouseover
//   } else if (arrowColorShift.style.color === "#9B8347") {
//     arrowColorShift.style.color = "#003A6C";
//   }
// });


// this was an attempt to put a for loop inside of my eventListener. It didn't make much sense
//
// sectionJS.addEventListener("click", function () {
//   for (clickCount = 1; clickCount <= 1000; clickCount++){
//     if (clickCount % 2 === 0) {
//       showHideText.style = "display:inline-block";//shows the paragraph upon a click of the section
//     }
//     else {
//       showHideText.style = "display:none";//hides the paragraph
//     }
//   }
//
// });

//this is an attempt to use onclick. It didn't work
// document.querySelector(".body").onclick = function() {
//     style = "display:inline-block";
// }


// sectionJS.addEventListener("click", function () {
//   hideText.style = "display:none";//hides??? the paragraph upon a click of the section
// }, false);
