window.onload = () => {

    // Variables for Adding Removing Classes 
    let toRight;
    let toLeft;
    let toTop;
    let toBottom;
    let windowHeight = window.innerHeight;

    // Final Variables of CSS Class List 
    const fromLeft = "from-left";
    const fromRight = "from-right";
    const fromBottom = "from-bottom";
    const fromTop = "from-top";


    // HTML Tags Class List 
    function getElementsFromHTML() {
        toRight = document.querySelectorAll(".to-right");
        toLeft = document.querySelectorAll(".to-left");
        toTop = document.querySelectorAll(".to-top");
        toBottom = document.querySelectorAll(".to-bottom");
    }

    // Make Animation of Each Items 
    function animateItems() {
        getElementsFromHTML();

        // Left to Right Animation 
        for (let i = 0; i < toRight.length; i++) {
            let temp = toRight[i];

            let animateToRight = toRight[i].getBoundingClientRect().top;
            if (animateToRight - windowHeight <= 0) {
                temp.classList.add(fromLeft);
                temp.classList.remove("to-right");

            } else {
                temp.classList.add("to-right");
                temp.classList.remove(fromLeft);
            }
        }

        // Right to Left Animation 
        for (let i = 0; i < toLeft.length; i++) {
            let temp = toLeft[i];

            let animateToLeft = toLeft[i].getBoundingClientRect().top;
            if (animateToLeft - windowHeight <= 0) {
                temp.classList.add(fromRight);
                temp.classList.remove("to-left");

            } else {
                temp.classList.add("to-left");
            }
        }

        // Bottom to Top Animation 
        for (let i = 0; i < toTop.length; i++) {
            let temp = toTop[i];

            let animateToTop = toTop[i].getBoundingClientRect().top;
            if (animateToTop - windowHeight <= 0) {
                temp.classList.add(fromBottom);
                temp.classList.remove("to-top");

            } else {
                temp.classList.add("to-top");
            }
        }

        // Top to Bottom Animation 
        for (let i = 0; i < toBottom.length; i++) {
            let temp = toBottom[i];

            let animateToBottom = toBottom[i].getBoundingClientRect().top;
            if (animateToBottom - windowHeight <= 0) {
                temp.classList.add(fromTop);
                temp.classList.remove("to-bottom");

            } else {
                temp.classList.add("to-bottom");
            }
        }
    }

    window.addEventListener("scroll", animateItems);
    window.addEventListener("resize", animateItems);
    animateItems();

}