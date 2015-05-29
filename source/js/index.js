/**
 * Main JS file
 */

/*globals jQuery, document */
(function ($) {
  "use strict";

  $(document).ready(function (){
    $(".post-content").fitVids();
  });

  $(document).scroll(function () {
    var dh = $('.post-content').height(), // document height
        wh = $(window).height(),          // window height
        offsetTop = $('.post-content').offset().top,
        y = $(document).scrollTop(),
        base = Math.max(5, offsetTop + dh - wh),
        progress = Math.min(100, y / base * 100);
    $('#bar').css({width: progress + '%'});
  });
}(jQuery));
