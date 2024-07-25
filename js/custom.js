
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
          $(".About_pic").addClass("About_slide");
      } else {
          $(".About_pic").removeClass("About_slide");
      }
  });

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 250) {

        // $(".Web").removeClass("Web");
        $(".Web").addClass("Web_slide");
    } else {

        // $(".Web").addClass("Web");
        $(".Web").removeClass("Web_slide");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {

        // $(".Web").removeClass("Web");
        $(".Introduction").addClass("Introduction_slide");
    } else {

        // $(".Web").addClass("Web");
        $(".Introduction").removeClass("Introduction_slide");
    }
});

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      // "images/pinterest/pin_five.jpg",
      //  "images/pin/pin4.jpg",
      //  "images/pin/pin12.jpg",
      //  "images/pinterest/pin_six.jpg"
      // "images/port1.jpg",
      "images/port1.jpg"
     
     
    ],  {duration: 2000, fade: 750});

    $('#sme').backstretch([
        // "images/pinterest/pin_five.jpg",
        //  "images/pin/pin4.jpg",
        //  "images/pin/pin12.jpg",
        //  "images/pinterest/pin_six.jpg"
        "images/port1.jpg",
        "images/sme.png"
       
       
      ],  {duration: 2000, fade: 750});
    
  })(window.jQuery);


