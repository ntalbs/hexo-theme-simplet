/**
 * Main JS file
 */

(function ($) {
  "use strict";

  $(document).ready(function (){
    $(".post-content").fitVids();
  });

  function randomColor () {
    var colors = [
      '#990099', '#660066', '#330033', '#330066', '#330099', '#003366',
      '#003399', '#000033', '#333300', '#663300', '#330000', '#990033',
      '#660033', '#089378', '#0898b3', '#1A5276', '#ffca00', '#ff9900'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function initProgress ($h1) {
    var threshold = $h1.offset().top + $h1.height() - $('nav').height(),
        $postContent = $('.post-content'),
        ph = $postContent.height(),       // post height
        wh = $(window).height(),          // window height
        color = randomColor();

    $(document).scroll(function () {
      if (!$postContent.length) return;

      var offsetTop = $postContent.offset().top,
          y = $(document).scrollTop(),
          base = Math.max(5, offsetTop + ph - wh),
          progress = Math.min(100, y / base * 100);
      $('#bar').css({
        'width': progress + '%',
        'background-color': color
      });

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

  $('[data-toggle=collapse]').on('click', function (e) {
    var target = $(this).attr('data-target');
    $(target).toggleClass('collapsed');
  });
}(jQuery));
