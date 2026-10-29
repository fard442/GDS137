// var Ball = {
//     x: 200,
//     y: 200,
//     width: 10,
//     height: 10,
//     color: 'blue',
//     force: 0,
//     vx: 0,
//     vy: 0
// }

var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");


var timer;
//1000 ms or 1 second / FPS
var interval = 1000/60;
// var ball = new Ball();
timer = setInterval(animate, interval);
// function drawBall(){
//     pen.beginPath();
//     pen.arc(Ball.x, Ball.y, Ball.radius, 0, 360*Math.PI, true);
//     pen.closePath();
//     pen.fill();
// }
// drawBall();
class Ball {
    constructor(canvas, pen){
        this.canvas = canvas;
        this.pen = pen;

        this.x = canvas.width/2;
        this.y = canvas.height/2;

        this.radius = 50;
        
        this.color = "blue";

        this.vx = 10;
        this.vy = 10;

        this.counter = 0;
    }

    drawBall(){
        this.pen.beginPath();
        this.pen.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        this.pen.fillStyle = this.color;
        this.pen.fill();
        this.pen.closePath();
    }
    
}
var ball = new Ball(canvas, pen);
function animate(){
    pen.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall();
    pen.fillStyle = "black";
    pen.font = "28px arial";
    pen.fillText(`bounze (bounces): ${ball.counter}`, 10, 25)

    
    ball.x += ball.vx;
    ball.y += ball.vy;

    //side collisions
    if(ball.x + 30 > canvas.width){
        ball.vx = -10;
        ball.counter += 1;
    } else if (ball.x - 30 < canvas.width - canvas.width){
        ball.vx = 10;
        ball.counter += 1;
    }

    //top and bottom collision
    if(ball.y + 30 > canvas.height){
        ball.vy = -10;
        ball.counter += 1;
    } else if (ball.y - 30 < canvas.height - canvas.height){
        ball.vy = 10;
        ball.counter += 1;
    }

    
    
}