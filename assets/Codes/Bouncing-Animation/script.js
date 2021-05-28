//////////START//////////
//Load the javascript section 
window.addEventListener('load', (event) => {

  //Get the canvas DOM from html
  var canvas = document.querySelector("canvas");

  //Get the canvas property
  var body = canvas.getContext("2d");

  //Fixed height and width for canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Set the color for each circle
  var colors = "#fff";
 
  //Declare the main funtion for circle and circles movement
  function circleBall(posX, posY, velocityX, velocityY, radius, color) {
    // position for left to right
    this.posX = posX;
    // position for top to bottom
    this.posY = posY;
    // left to right movement
    this.velocityX = velocityX;
    // top to bottom movement
    this.velocityY = velocityY;
    // circle radius
    this.radius = radius;
    // circle color
    this.color = color;
    // InnerFunction for circles
    this.ball = () => {
      // start drawing
      body.beginPath();
      // draw the circle
      body.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
      // Get the color
      body.fillStyle = this.color;
      // Set the outline stroke
      body.stroke = "none";
      // Fill circle with color
      body.fill();
      // Close the drawing path
      body.closePath();
      //console.log(3);
    };
    // InnerFunction for circles movement
    this.data = () => {
      // If cirles position + radius is greater than canvas width or cirles position - radius is smaller than 0 then circles velocityX will decrease(circles will move from right to left)
      if (this.posX + this.radius > innerWidth ||
        this.posX - this.radius < 0) {
        // decreasing the X velocity
        this.velocityX = -this.velocityX;
      }
      // If cirles position + radius is greater than canvas height or If cirles position - radius is smaller than 0 then circles velocityY will decrease(circles will move from bottom to top)
      if (this.posY + this.radius > innerHeight ||
        this.posY - this.radius < 0) {
        // decreasing the Y velocity
        this.velocityY = -this.velocityY;
      }
      // position(left to right) will increase by random velocity
      this.posX += this.velocityX;
      // position(top to bottom) will increase by random velocity
      this.posY += this.velocityY;
      // data() InnerFunction will be efffect to ball() InnerFunction
      this.ball();
    };
  }
  //Function to getting random value
  function randomSize(x, y) {
    return Math.floor(Math.random() * (y - x * 2) + x);
  }
  //circles will be store on this variable
  var circleBalls;

  //Function to get values for circles
  function ballElements() {
    //Daclearing as an array
    circleBalls = [];
    // 20 circle will be create
    for (var i = 0; i < 50; i++) {
      //Random circle radius
      var radius = randomSize(10, 30);
      //Random cirle left position
      var posX = randomSize(radius, innerWidth - radius);
      //Random circle top position
      var posY = randomSize(radius, innerHeight - radius);
      //Random circle left velocity
      //Getting some issues when usign randomSize() funtion here. so I use as usual system
      var velocityX = (Math.random() - 0.9) * 2;
      //Random circle top velocity
      var velocityY = (Math.random() - 0.9) * 2;
      // randomSize(-1, 1)
      // (Math.random() - 1)
      //Set colors
      var color = colors;
      //Lets push values for every new circle
      circleBalls.push(new circleBall(posX, posY, velocityX, velocityY, radius, color));
    }
  }
  // Function for animation movement of circles
  function startAnimation() {
    //getting every frame animation
    requestAnimationFrame(startAnimation);
    //clearing frames to see animation movement
    body.clearRect(0, 0, innerWidth, innerHeight);
    //animation for every created circles
    for (var i = 0; i < circleBalls.length; i++) {
      circleBalls[i].data();
    }
  }
  //Calling functions
  ballElements();
  startAnimation();
  // Click event to created new values everytime when clicked on the screen
  addEventListener("click", function () {
    ballElements();
  });
});

///////THE END//////