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


  var $pane = $('.navbar-items'),
      height = $pane.height();
  $('.navbar-toggle').on('click', function (e) {
    if ($pane.hasClass('initial')) {
      // 이 블럭은 페이지가 로딩된 후 처음 버튼을 클릭했을 때만 실행된다.
      $pane.height(0);
      $pane.removeClass('initial');
      $pane.addClass('collapsed');
    }
    if ($pane.hasClass('collapsed')) {
      $pane.height(height);
      $pane.removeClass('collapsed');
    } else {
      $pane.height(0);
      $pane.addClass('collapsed');
    }
  });
}(jQuery));
