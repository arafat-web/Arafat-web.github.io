// Navbar will stick on top //

window.onscroll = function () {
  stickyNav();
};

// Sticky top navbar function //
function stickyNav() {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    //navbar.classList.add("non-sticky");
    navbar.style.marginTop = "1px";
  }
}

// Toggle navbar open and close funtion //
function navOpenClose() {
  var nav = document.getElementById("collapse");
  var toggleIcon = document.getElementById("toggle-icon");
  if (nav.style.height === "0px") {
    nav.style.height = "160px";
    toggleIcon.style.transform = "rotate(90deg)";
  } else {
    nav.style.height = "0px";
    toggleIcon.style.transform = "rotate(270deg)";
  }
}

// Top image slider //
var slideCountTop = 0;
slideShowStartTop();
function slideShowStartTop() {
  var count;
  var slide = document.getElementsByClassName("slides");
  for (count = 0; count < slide.length; count++) {
    slide[count].style.display = "none";
  }
  slideCountTop++;
  if (slideCountTop > slide.length) {
    slideCountTop = 1;
  }
  slide[slideCountTop - 1].style.display = "block";
  setTimeout(slideShowStartTop, 3000);
}

// Bottom Image slider //
//Two different slider for different time //
var slideCountFooter = 0;
slideShowStartFooter();
function slideShowStartFooter() {
  var countFooter;
  var slideFooter = document.getElementsByClassName("slides2");
  for (countFooter = 0; countFooter < slideFooter.length; countFooter++) {
    slideFooter[countFooter].style.display = "none";
  }
  slideCountFooter++;
  if (slideCountFooter > slideFooter.length) {
    slideCountFooter = 1;
  }
  slideFooter[slideCountFooter - 1].style.display = "block";
  setTimeout(slideShowStartFooter, 2000);
}

// Footer area menu collapsible //
(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
})();

// Full function for on Scroll animation //
(function () {
  var leftTo;
  var rightTo;
  var windowHeight;
  function init() {
    leftTo = document.querySelectorAll(".left-to");
    rightTo = document.querySelectorAll('.right-to');
    windowHeight = window.innerHeight;
  }
  function checkPosition() {

    //Left to Right Animation
    for (var i = 0; i < leftTo.length; i++) {
      var element = leftTo[i];
      var pos = leftTo[i].getBoundingClientRect().top;
      if (pos - windowHeight <= 0) {
        element.classList.add("left-to-right");
        element.classList.remove("left-to");
      } else {
        element.classList.add("left-to");
      }
    }
    //Right to Left Animation
    for (var i = 0; i < rightTo.length; i++) {
      var element = rightTo[i];
      var pos = rightTo[i].getBoundingClientRect().top;
      if (pos - windowHeight <= 0) {
        element.classList.add("right-to-left");
        element.classList.remove("right-to");
      } else {
        element.classList.add("right-to");
      }
    }
  }
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);
  init();
  checkPosition();
})();
