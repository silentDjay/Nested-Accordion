$(function () {
  "use strict";

//create an eventListener on the object containing the sections (<body>), or maybe all <sections>
//it should:

$("h2").on("click", function () {
  // $("h2").parents().children().filter("p").css("display", "");
  $(this).siblings().toggle();//this toggles the css.display property of the siblings of the target object (the clicked h2)
  $(this).children(":first").removeClass("rotate45");//removes the hoverover styling upon click
  $(this).children(":first").toggleClass("rotate");//adds the click styling
  console.log("$(h2).parents().children().filter('p')[2] is " + $("h2").parents().children().filter("p")[2]);
  console.log("$(this).attr('id') " + $(this).attr('id'));
  console.log($("h2").parents().children().filter("p")[2].attr('id') === $(this).attr('id')) // the first value I'm trying to compare there doesn't seem to work

  // here is a for loop I tried to throw into this event; it didn't work
//   for (i=0; i < $("h2").parents().children().filter("p").length; i++){if ($("h2").parents().children().filter("p")[i].attr('id') === $(this).attr('id')) {
// 	return false;
// }else{
// 	$("h2").parents().children().filter("p")[i].css("display", "");
// }
// }

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
