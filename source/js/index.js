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
        y = $(document.body).scrollTop(),
        progress = Math.min(100, y / (offsetTop + dh - wh) * 100);
    $('#bar').css({width: progress + '%'});
  });
}(jQuery));
