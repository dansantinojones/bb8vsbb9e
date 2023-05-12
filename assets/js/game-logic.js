jQuery(document).ready(function ($) {

    $('table tr td img').mousedown(function (event) {
      switch (event.which) {
        case 1:
          var angle = ($(this).data('angle')) || 0;
          angle -= 90;
          $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });
          $(this).data('angle', angle);
          break;
        case 3:
          var angle = ($(this).data('angle')) || 0;
          angle += 90;
          $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });
          $(this).data('angle', angle);
          break;
      }
    });
  
    /* level 1 winning combintion */
  
    var lvl1_win = {
      a: [-90, 270],
      b: [-90, 90],
      c: [90, -270],
      d: [0, 360],
      e: [-90, 90],
      f: [-180, 180],
      g: [-90, 270],
      h: [-90, 90],
      i: [-270, 90]
    }
  
    var moves = 0 // moves counter
  
    $('table tr td img').mousedown(function () {
      var img_id = $(this).attr('id');
      var img_angle = lvl1_win[img_id];
      moves += 1;
      if (($(this).data('angle')) === img_angle[0] || ($(this).data('angle')) === img_angle[1]) {
        console.log("win!!!!!!");
        $(this).addClass("point");
      } else {
        $(this).removeClass("point");
      };
      /* check for win */
      if ($('table tr td img.point').length === 9) { // count how many times class "point" exist
        setTimeout(function () {
          alert("YOU WIN!!");
        }, 600);
      }
    });
  
  });