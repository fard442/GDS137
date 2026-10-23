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

        this.vx = 0;
        this.vy = 0;
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
    ball.drawBall();
}