$(document).ready(function() {
    "use strict";
  
    var main_wind = $(window);
    var consultScroll = $(".button_btt");
  
    main_wind.on("scroll", function() {
      if ($(this).scrollTop() > 500) {
        consultScroll.fadeIn();
        consultScroll.removeClass("invisivel");
      } else {
        consultScroll.fadeOut();
      }
    });
  
    consultScroll.on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({
        scrollTop: 0
      }, 1000); 
    });
  });
    