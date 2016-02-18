//this is still not working properly upon multiple clicks. I'm toggling too many things

$(function () {
  "use strict";

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

$("h2").on("click", function () {
  // $("h2").parents().children().filter("p").css("display", "");
  $(this).siblings().toggle();//this toggles the css.display property of the siblings of the target object (the clicked h2)
  $(this).children(":first").removeClass("rotate45");//removes the hoverover styling upon click
  $(this).children(":first").toggleClass("rotate");//adds the click styling

  for (var i=0; i < $("h2").length; i++) {
    if ($("h2")[i] === this) {//if the thing to check is the h2 that was clicked ...
      return false;//do nothing
    } else {
  	  var iElement = $("h2").siblings()[i];//$("h2").siblings()[i].css("display", "") threw an error, so I'm creating a variable instead
      $(iElement).toggle();//toggle the css display of the thing to 'none'
    }
  }

});

});
