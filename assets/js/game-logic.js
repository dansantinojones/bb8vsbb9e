jQuery(document).ready(function ($) {

  var activeElement = $("#timer-8, #timer-81");
  var remainingTime = 10;

  // use setInterval() to run a function every second
  var intervalId = setInterval(function () {
    // update the remaining time
    remainingTime--;

    // update the text of the active timer element
    activeElement.text(remainingTime);

    // if the remaining time is 0, toggle the active element
    if (remainingTime === 0) {
      // get the table row element
      var tableRow = activeElement.closest("tr");

      // get the inactive element
      var inactiveElement = tableRow.find(".timer-element:not(.active-timer)");

      // set the initial value of the new active timer element to 10
      inactiveElement.text("10");

      // toggle the active class on both elements
      activeElement.toggleClass("active-timer");
      inactiveElement.toggleClass("active-timer");

      // set the active element to the previously inactive one
      activeElement = inactiveElement;

      // reset the remaining time
      remainingTime = 10;
    }
  }, 1000);

  /* tile rotation on click */
  $('table tr td img').mousedown(function (event) {
    switch (event.which) {
      case 1:
        var angle = ($(this).data('angle')) || 0;
        angle -= 90;
        console.log(angle)
        $(this).css({
          'transform': 'rotate(' + angle + 'deg)'
        });
        $(this).data('angle', angle);
        break;
      case 3:
        var angle = ($(this).data('angle')) || 0;
        angle += 90;
        console.log(angle)
        $(this).css({
          'transform': 'rotate(' + angle + 'deg)'
        });
        $(this).data('angle', angle);
        break;
    }
  });

  /* BB-8 winning combintion */
  var bb8_win = {
    a: [90, -270, -630, 450, 810],
    b: [-90, 270, 630, -450, -810],
    c: [0, 90, -90, 180, -180],
    d: [180, -180, -540, -900, 540],
    e: [-90, -450, -810, 270, 630],
    f: [90, -270, -630, 450, 810],
    g: [90, -270, -630, 450, 810],
    h: [180, -180, -450, 450, -900],
    i: [-90, -450, -810, 270, 630]
  }

  /* BB-9e winning combintion */
  var bb9_win = {
    a: [0, 90, -90, 180, -180],
    b: [90, -270, -630, 450, 810],
    c: [180, 540, 900, -180, -540],
    d: [0, -360, -720, 360, 720],
    e: [90, 450, 810, -270, -630],
    f: [-90, -450, -810, 270, 630],
    g: [-180, -540, -900, 180, 540],
    h: [180, -180, -450, 450, -900],
    i: [-90, -450, -810, 270, 630]
  }

  var moves = 0 // moves counter
/* checking bb8 win status */
   $('table tr td img').mousedown(function () {
     var img_id = $(this).attr('id');
     var img_angle = bb8_win[img_id];
     moves += 1;
     if (($(this).data('angle')) === img_angle[0] || ($(this).data('angle')) === img_angle[1] || ($(this).data('angle')) === img_angle[2] || ($(this).data('angle')) === img_angle[3] || ($(this).data('angle')) === img_angle[4]) {
       console.log("win!!!!!!");
       $(this).addClass("point-bb8");
     } else {
       $(this).removeClass("point-bb8");
     };
     // check for win 
     if ($('table tr td img.point-bb8').length === 9) { // count how many times class "point" exist
       setTimeout(function () {
         alert("BB-8 wins!");
       }, 600);
     }
   });

   /* checking bb9 win status */
   $('table tr td img').mousedown(function () {
    var img_id = $(this).attr('id');
    var img_angle = bb9_win[img_id];
    moves += 1;
    if (($(this).data('angle')) === img_angle[0] || ($(this).data('angle')) === img_angle[1] || ($(this).data('angle')) === img_angle[2] || ($(this).data('angle')) === img_angle[3] || ($(this).data('angle')) === img_angle[4]) {
      console.log("win!!!!!!");
      $(this).addClass("point-bb9");
    } else {
      $(this).removeClass("point-bb9");
    };
    // check for win 
    if ($('table tr td img.point-bb9').length === 9) { // count how many times class "point" exist
      setTimeout(function () {
        alert("BB-9E wins!");
      }, 600);
    }
  });

});

// game sounds

const audio = new Audio("assets/sounds/blaster.mp3");
const buttons = document.querySelectorAll("td");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});