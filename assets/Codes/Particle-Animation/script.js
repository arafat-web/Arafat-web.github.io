

'use strict';
window.addEventListener('load', (event) => {


    const canvas = document.querySelector("canvas");
    const body = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
        '#fc5108',
        '#fcec08',
        '#3dfc08',
        '#0ee8cf',
        '#0e5ae8',
        '#b90ee8',
        '#e80eaa',
        '#e80e0e'

    ]
    let mouse = {
        x: undefined,
        y: undefined
    }
    let maxRadius = 40;
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
        console.log(e);

    });
    function circleBall(posX, posY, velocityX, velocityY, radius, color) {
        this.posX = posX;
        this.posY = posY;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;
        this.ball = () => {
            body.beginPath();
            body.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
            body.fillStyle = this.color;
            body.stroke = "none";
            body.fill();
            body.closePath();
        };
        this.data = () => {

            if (this.posX + this.radius > innerWidth || this.posX - this.radius < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY + this.radius > innerHeight || this.posY - this.radius < 0) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;

            if (mouse.x - this.posX < 50 && mouse.x - this.posX > -50 && mouse.y - this.posY < 50 && mouse.y - this.posY > -50) {

                if (this.radius < maxRadius) {
                    this.radius += 1;
                }


            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }


            this.ball();
        };
    };

    function randomSize(x, y) {
        return Math.floor(Math.random() * (y - x * 2) + x);
    }
    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    let circleBalls;

    function ballElements() {
        let i = 0;
        circleBalls = [];
        for (i; i < 500; i++) {
            let radius = randomSize(3, 5);
            let posX = randomSize(radius, innerWidth - radius);
            let posY = randomSize(radius, innerHeight - radius);
            let velocityX = (Math.random() - 0.8) * 3;
            let velocityY = (Math.random() - 0.8) * 3;
            let color = randomColor(colors);
            circleBalls.push(new circleBall(posX, posY, velocityX, velocityY, radius, color));
        }
    }

    function startAnimation() {
        requestAnimationFrame(startAnimation);
        body.clearRect(0, 0, innerWidth, innerHeight);
        let i = 0;
        for (i; i < circleBalls.length; i++) {
            circleBalls[i].data();
        }
    }
    ballElements();
    startAnimation();


});