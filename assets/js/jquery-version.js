$(function () {
  "use strict";

//create an eventListener on the object containing the sections (<body>), or maybe all <sections>
//it should:

$("h2").on("click", function () {
  $(this).siblings().toggle();//this toggles the css.display property of the target object
  $(this).children(":first").removeClass("rotate45");//removes the hoverover styling upon click
  $(this).children(":first").toggleClass("rotate");//adds the click styling
  console.log("$(this).parents().children().filter('p').attr('class') is " + $(this).parents().children().filter("p").attr("class"));

  // $("h2").parents().children().filter("p").attr("class")

  // $(this).parents().children().filter("p").not("this.siblings()")toggle();

  // $(this).parents().children().filter("p").not("this.siblings()").toggle();
});

// .css("display")

$("h2").on("mouseover", function () {
  if (!$(this).children(":first").attr("class").includes("rotate")) { //if the header that was clicked's first child's class list does not already include "rotate" (meaning it hasn't been clicked/expanded), THEN
  $(this).children(":first").addClass("rotate45");// change the color and rotate it 45 degrees
  } else { // and if that wasn't the case...
    return false;
  }
});

$("h2").on("mouseout", function () {
  $(this).children(":first").removeClass("rotate45");//no need to have if statement here - the only time the arrow should rotate 45 degrees is when a mouse is over it, regardless of whether it's been clicked
});

});
