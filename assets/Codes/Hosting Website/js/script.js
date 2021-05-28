$(document).ready(function () {
    'use strict';

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 200) {
            if($(document).width() < 991){
                $(".navbar").css({ "background-color": "#333", "transition": "all 0.8s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
                $(".navbar-collapse").css("background-color", "#333");
            }else{
            $(".navbar").css({ "background-color": "#333", "transition": "all 0.8s ease-in-out", "box-shadow": "0px 3px 4.6px 0.3px rgba(0, 0, 0, 0.25)" });
            $(".navbar-collapse").css("background-color", "transparent");
            }
        } else {
            $(".navbar").css({ "background-color": "transparent", "box-shadow": "none" });
        }
    });
    $(".navbar-toggler").click(function () {
        $(".navbar-collapse").css("background-color", "rgba(0, 0, 0, 0.7)")
    })
    $('#circles').polygonizr();

    startChangingText(['.Com', '.Net', '.Org'], 2);
});