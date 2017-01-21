/**
 * Main JS file
 */

(function ($) {
  'use strict'

  $(document).ready(function () {
    $('.post-content').fitVids()
  })

  function randomColor () {
    var colors = [
      '#660066', '#330033', '#330066', '#003366',
      '#003399', '#000033', '#333300', '#330000', '#990033',
      '#660033', '#089378', '#0898b3', '#1A5276', '#ffca00', '#ff9900'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function initProgress ($h1) {
    var threshold = $h1.offset().top + $h1.height() - $('nav').height()
    var $postContent = $('.post-content')
    var ph = $postContent.height()       // post height
    var wh = $(window).height()          // window height
    var color = randomColor()

    $(document).scroll(function () {
      if (!$postContent.length) return

      var offsetTop = $postContent.offset().top
      var y = $(document).scrollTop()
      var base = Math.max(5, offsetTop + ph - wh)
      var progress = Math.min(100, y / base * 100)

      $('#bar').css({
        'width': progress + '%',
        'background-color': color
      })

      if (y <= threshold) {
        $('#progress').height('8px')
      } else {
        $('#progress').height('36px')
      }
    })
  }

  var $h1 = $('h1')
  if ($h1.length) {
    initProgress($h1)
  }

  $('[data-toggle=collapse]').on('click', function (e) {
    var target = $(this).attr('data-target')
    $(target).toggleClass('collapsed')
  })

  function minHeight () {
    var wh = $(window).height()
    var hh = $('header').height()
    var fh = $('footer').outerHeight(true)
    var minHeight = wh - hh - fh - 20 // 20 for adjustment
    return minHeight + 'px'
  }

  $('main').css('min-height', minHeight())
}(jQuery))
