// Set variables for each ID of each element that needs to be changed
// so they can be modified via javascript individually
// There's gotta be a better way to do this (jquery?????)

var section1JS = document.querySelector("#titleBox1");
var section2JS = document.querySelector("#titleBox2");
var section3JS = document.querySelector("#titleBox3");
var section4JS = document.querySelector("#titleBox4");
var arrow1ColorShift = document.querySelector("#icon1");
var arrow2ColorShift = document.querySelector("#icon2");
var arrow3ColorShift = document.querySelector("#icon3");
var arrow4ColorShift = document.querySelector("#icon4");
var showHideText = document.querySelector("#body1");
var showHideText2 = document.querySelector("#body2");
var showHideText3 = document.querySelector("#body3");
var showHideText4 = document.querySelector("#body4");
var downArrow1 = document.querySelector("#arrow1");
var downArrow2 = document.querySelector("#arrow2");
var downArrow3 = document.querySelector("#arrow3");
var downArrow4 = document.querySelector("#arrow4");

// this was an attempt to put a for loop inside of my eventListener. The first click worked, but the second didn't because the clickCount variable didn't continue to iterate after multiple clicks
//
// section1JS.addEventListener("click", function () {
//   for (clickCount = 3; clickCount <= 1000; clickCount++){
//     if (clickCount % 2 === 0) {
//       showHideText.style.display = "inline-block";//shows the paragraph upon a click of the section
//       showHideText2.style.display = "";//hides the other text
//       showHideText3.style.display = "";
//       showHideText4.style.display = "";
//       downArrow1.className = "fa fa-arrow-right fa-rotate-90";
//       downArrow2.className = "fa fa-arrow-right";//changes the other arrows back to default
//       downArrow3.className = "fa fa-arrow-right";
//       downArrow4.className = "fa fa-arrow-right";
//     }
//     else {
//       showHideText.style.display = "";//hides the paragraph
//       downArrow1.className = "fa fa-arrow-right";
//     }
//   }
//
// });

// change both the display style of the <p> below each section
// headers AND the rotation of the arrow icon upon a click

section1JS.addEventListener("click", function () {
  if (showHideText.style.display === ""){
    showHideText.style.display = "inline-block";//shows the text
    showHideText2.style.display = "";//hides the other text
    showHideText3.style.display = "";
    showHideText4.style.display = "";
    downArrow1.className = "fa fa-arrow-right fa-rotate-90";
    downArrow2.className = "fa fa-arrow-right";//changes the other arrows back to default
    downArrow3.className = "fa fa-arrow-right";
    downArrow4.className = "fa fa-arrow-right";
  }
  else { // I had this as an else if (showHideText.style.display === "inline-block") BUT I DON'T NEED IT!!
    showHideText.style.display = "";// hides the text
    downArrow1.className = "fa fa-arrow-right";
  }
});

section2JS.addEventListener("click", function () {
  if (showHideText2.style.display === ""){
    showHideText2.style.display = "inline-block";
    showHideText.style.display = "";//hides the other text
    showHideText3.style.display = "";
    showHideText4.style.display = "";
    downArrow2.className = "fa fa-arrow-right fa-rotate-90";
    downArrow1.className = "fa fa-arrow-right";
    downArrow3.className = "fa fa-arrow-right";
    downArrow4.className = "fa fa-arrow-right";
  }
  else {
    showHideText2.style.display = "";
    downArrow2.className = "fa fa-arrow-right";
  }
});

section3JS.addEventListener("click", function () {
  if (showHideText3.style.display === ""){
    showHideText3.style.display = "inline-block";
    showHideText.style.display = "";//hides the other text
    showHideText2.style.display = "";
    showHideText4.style.display = "";
    downArrow3.className = "fa fa-arrow-right fa-rotate-90";
    downArrow1.className = "fa fa-arrow-right";
    downArrow2.className = "fa fa-arrow-right";
    downArrow4.className = "fa fa-arrow-right";
  }
  else {
    showHideText3.style.display = "";
    downArrow3.className = "fa fa-arrow-right";
  }
});

section4JS.addEventListener("click", function () {
  if (showHideText4.style.display === ""){
    showHideText4.style.display = "inline-block";
    showHideText.style.display = "";//hides the other text
    showHideText2.style.display = "";
    showHideText3.style.display = "";
    downArrow4.className = "fa fa-arrow-right fa-rotate-90";
    downArrow1.className = "fa fa-arrow-right";
    downArrow2.className = "fa fa-arrow-right";
    downArrow3.className = "fa fa-arrow-right";
  }
  else {
    showHideText4.style.display = "";
    downArrow4.className = "fa fa-arrow-right";
  }
});

//when a cursor goes over each individual section, the arrow
//icon associated with that section will change color.
//when the cursor moves away again, the color will change back

section1JS.addEventListener("mouseover", function () {
  arrow1ColorShift.style.color = "#003A6C";
  //downArrow1.className = "fa fa-arrow-right  fa-rotate-45";//these didn't work, so I'm commenting them out
});

section1JS.addEventListener("mouseout", function () {
  arrow1ColorShift.style.color = "#9B8347";
  //downArrow1.className = "fa fa-arrow-right";
});

section2JS.addEventListener("mouseover", function () {
  arrow2ColorShift.style.color = "#003A6C";
  //downArrow2.className = "fa fa-arrow-right  fa-rotate-45";
});

section2JS.addEventListener("mouseout", function () {
  arrow2ColorShift.style.color = "#9B8347";
  //downArrow2.className = "fa fa-arrow-right";
});

section3JS.addEventListener("mouseover", function () {
  arrow3ColorShift.style.color = "#003A6C";
  //downArrow3.className = "fa fa-arrow-right  fa-rotate-45";
});

section3JS.addEventListener("mouseout", function () {
  arrow3ColorShift.style.color = "#9B8347";
  //downArrow3.className = "fa fa-arrow-right";
});

section4JS.addEventListener("mouseover", function () {
  arrow4ColorShift.style.color = "#003A6C";
  //downArrow4.className = "fa fa-arrow-right  fa-rotate-45";
});

section4JS.addEventListener("mouseout", function () {
  arrow4ColorShift.style.color = "#9B8347";
  //downArrow4.className = "fa fa-arrow-right";
});

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
