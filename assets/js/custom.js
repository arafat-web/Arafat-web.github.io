/*
  Author: Arafat Hossain Ar
  Date: 07 - 01 - 2021
*/
$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 2000);

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 200) {
            $(".navbar").css({ "background-color": "#ffffff", "transition": "all 0.5s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
            $(".navbar-collapse").css("background-color", "transparent");
        } else {
            $(".navbar").css({ "background-color": "transparent", "box-shadow": "none" });
        }
    })


    $('div.repos').repos({username:'arafat-hossain-ar',count:10});

})