/**
 * Main JS file
 */

(function ($) {
  "use strict";

  $(document).ready(function (){
    $(".post-content").fitVids();
  });

  function initProgress ($h1) {
    var threshold = $h1.offset().top + $h1.height() - $('nav').height(),
        $postContent = $('.post-content'),
        ph = $postContent.height(),       // post height
        wh = $(window).height();          // window height

    $(document).scroll(function () {
      if (!$postContent.length) return;

      var offsetTop = $postContent.offset().top,
          y = $(document).scrollTop(),
          base = Math.max(5, offsetTop + ph - wh),
          progress = Math.min(100, y / base * 100);
      $('#bar').css({width: progress + '%'});

      if (y <= threshold) {
        $('#progress').height('8px');
      } else {
        $('#progress').height('36px');
      }
    });
  }

  var $h1 = $('h1');
  if ($h1.length) {
    initProgress($h1);
  }
}(jQuery));
