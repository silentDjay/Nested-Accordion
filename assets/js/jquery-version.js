$(function () {
  "use strict";

//create an eventListener on the object containing the sections (<body>), or maybe all <sections>
//it should:

// 1. check if the style.display of the thing you're clicking on === ""
// 2. changes that style.display to inline-block
// 3. changes the style.display of all other <p>s to ""
// 4. changes the arrow on the clicked header to downward (addClass)
// changes all other arrows back to default position
// 5. changes the color of the arrow to #003A6C
// 6. changes all other arrows back to #9B8347

$("h2").on("click", function () {
    $(".hiddenText").toggle();//this toggles the css.display property of the target object
    $("i").toggleClass("rotate");//this toggles adding/removing the 'rotate' class to every icon
});

// mouseover/out
// 1. check to see if arrow has class fa-rotate-90
// 2. if SO, do NOTHING upon mouseout/over
// if NOT:
// 1. upon mouseover on an arrow, change the rotation (via class) of the arrow to fa-rotate-45
// 2. upon mouseover on an arrow, change the color (via css.("color")) to #003A6C OR VIA CSS??
// 3. upon mouseout, change the rotation back to default (removeClass) and the color back to #9B8347 OR VIA CSS??

});
