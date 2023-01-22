var ytID = 'OEvkRtgo-PI';
var apiKey = 'AIzaSyDaPnpShE8nxyGs-QjX55r5qREcQhub-j8';

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: ytID // youtube video ID
  });
}

// time seeker buttons
var button = $('.youtube-embed .controls .seeker-button');
button.click(function(e) {
  e.preventDefault();
  var time = $(this).attr('data-youtube-seek');
  player.seekTo(time).playVideo();
  $('html, body').delay(250).animate({
    scrollTop: $('#player').offset().top - 15
  }, 250, 'swing');
  $(this).blur();
});

$(document).ready(function() {
  // Material Design 'Ripple' effect on timestamp links
  var parent, ink, d, x, y;
  $('.ripple').click(function(e) {
    parent = $(this).parent();
    // create .ink element if it doesn't exist
    if (parent.find('.ink').length == 0) {
      parent.prepend('<span class="ink"></span>');
    }

    ink = parent.find('.ink');
    // in case of quick double clicks stop the previous animation
    ink.removeClass('animate');

    // set size of .ink
    // use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
    d = Math.max(parent.outerWidth(), parent.outerHeight());
    ink.css({
      height: d,
      width: d
    });

    // Get click coordinates
    // logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - parent.offset().left - ink.width() / 2;
    y = e.pageY - parent.offset().top - ink.height() / 2;

    // set position and add class .animate
    ink.css({
      top: y + 'px',
      left: x + 'px'
    }).addClass('animate');
  });
});

$(window).load(function() {
  // Match heights of video and timestamp list
  var ytVideo = $('.youtube-embed .video-wrapper .video');
  var timestampList = $('.youtube-embed .controls ul');
  var timestampListHeading = $('.youtube-embed .controls > h2');

  timestampList.show().css({
    'max-height': (ytVideo.outerHeight() - timestampListHeading.outerHeight()) + 'px'
  });

  $(window).resize(function() {
    timestampList.css({
      'max-height': (ytVideo.outerHeight() - timestampListHeading.outerHeight()) + 'px'
    });
  });
});