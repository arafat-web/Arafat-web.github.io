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

    // function ASB() {
    //     let k = 1;
    //     var items = document.querySelectorAll(".skills");
    //     items.forEach((el) => {
    //       k = k + 0.2;
    //       el.style.transition = `all ${k}s ease-out`;
    //       let limit = el.textContent;
    //       var width = 0;
    //       var id = setInterval(frame, 0);
    //       function frame() {
    //         if (width >= limit) {
    //           clearInterval(id);
    //         } else {
    //           width++;
    //           el.style.width = width + "%";
    //           el.innerHTML = width + "%";
    //         }
    //       }
    //     });
    //   }
    //   ASB();
})