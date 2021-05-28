/*
  Author: Arafat Hossain Ar
  Date: 07 - 01 - 2021
*/

(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });
  
 
  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
            $('#logo-1').show();
            $('#logo-2').hide();
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
            $('#logo-2').show();
            $('#logo-1').hide();
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: true
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    /* Counter
    ========================================================*/
    $('.counterUp').counterUp({
     delay: 10,
     time: 1000
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });



  });      

}(jQuery));



$(document).ready(function () {

  setTimeout(function () {
      $('.loader_bg').fadeToggle();
  }, 2000);

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
      $(document).on('click', 'a.page-scroll', function (event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

})
function initSparkling() {
  // settings
  const color = "#FFC700";
  const svgPath = 'M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z';

  // sparkling effect
  let sparkling = function() {
      $('.sparkling').each(function() {
          let sparklingElement = $(this);
          let stars = sparklingElement.find('.star');

          // remove the first star when more than 6 stars existing
          if(stars.length > 5) {
              stars.each(function(index) {
                  if(index === 0) {
                      $(this).remove();
                  }
              });
          }
          // add a new star
          sparklingElement.append(addStar());
      });

      let rand = Math.round(Math.random() * 100) + 100;
      setTimeout(sparkling, rand);
  }
    
  // star
  let addStar = function() {
      let size = Math.floor(Math.random() * 20) + 10;
      let top = Math.floor(Math.random() * 100) - 50;
      let left = Math.floor(Math.random() * 100);

      return '<span class="star" style="top:' + top + '%; left:' + left + '%;">'
          + '<svg width="' + size + '" height="' + size + '" viewBox="0 0 68 68" fill="none">'
          + '<path d="' + svgPath + '" fill="' + color + '" /></svg></span>';
  }

  // execute
  sparkling();
}

$(function() {
  // init sparkling stars
  initSparkling();
});
