/*
  Author: Arafat Hossain Ar
  Date: 07 - 01 - 2021
*/
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