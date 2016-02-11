// Set variables for each ID of each element that needs to be changed

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

section1JS.addEventListener("click", function () {
  if (showHideText.style.display === ""){
    showHideText.style.display = "inline-block";//shows the text
    //arrow1ColorShift.style.color = "#003A6C"; this doesn't work
    }
  else if (showHideText.style.display === "inline-block"){
    showHideText.style.display = "";// hides the text
    //arrow1ColorShift.style.color = "#9B8347"; this doesn't work
  }
});

section2JS.addEventListener("click", function () {
  if (showHideText2.style.display === ""){
    showHideText2.style.display = "inline-block";//shows the text
    //arrow1ColorShift.style.color = "#003A6C"; this doesn't work
    }
  else if (showHideText2.style.display === "inline-block"){
    showHideText2.style.display = "";// hides the text
    //arrow1ColorShift.style.color = "#9B8347"; this doesn't work
  }
});

section3JS.addEventListener("click", function () {
  if (showHideText3.style.display === ""){
    showHideText3.style.display = "inline-block";//shows the text
    //arrow1ColorShift.style.color = "#003A6C"; this doesn't work
    }
  else if (showHideText3.style.display === "inline-block"){
    showHideText3.style.display = "";// hides the text
    //arrow1ColorShift.style.color = "#9B8347"; this doesn't work
  }
});

section4JS.addEventListener("click", function () {
  if (showHideText4.style.display === ""){
    showHideText4.style.display = "inline-block";//shows the text
    //arrow1ColorShift.style.color = "#003A6C"; this doesn't work
    }
  else if (showHideText4.style.display === "inline-block"){
    showHideText4.style.display = "";// hides the text
    //arrow1ColorShift.style.color = "#9B8347"; this doesn't work
  }
});

section1JS.addEventListener("mouseover", function () {
  arrow1ColorShift.style.color = "#003A6C";
});

section1JS.addEventListener("mouseout", function () {
  arrow1ColorShift.style.color = "#9B8347"; //changes back to gold
});

section2JS.addEventListener("mouseover", function () {
  arrow2ColorShift.style.color = "#003A6C";
});

section2JS.addEventListener("mouseout", function () {
  arrow2ColorShift.style.color = "#9B8347"; //changes back to gold
});

section3JS.addEventListener("mouseover", function () {
  arrow3ColorShift.style.color = "#003A6C";
});

section3JS.addEventListener("mouseout", function () {
  arrow3ColorShift.style.color = "#9B8347"; //changes back to gold
});

section4JS.addEventListener("mouseover", function () {
  arrow4ColorShift.style.color = "#003A6C";
});

section4JS.addEventListener("mouseout", function () {
  arrow4ColorShift.style.color = "#9B8347"; //changes back to gold
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
