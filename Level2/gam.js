var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");


var timer;

var interval = 1000/60;
timer = setInterval(animate, interval);

class GameObject {
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

    drawCircle(){
        this.pen.beginPath();
        this.pen.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        this.pen.fillStyle = this.color;
        this.pen.fill();
        this.pen.closePath();
    }

    drawRect(){
        this.pen.fillRect(this.x, this.y, 25, 100);
    }
    
}

var player1 = new GameObject(canvas, pen);
player1.x = 40;

function animate(){
    pen.clearRect(0, 0, canvas.width, canvas.height);
    player1.drawRect();
    
    

    
    // player1.x += player1.vx;
    // player1.y += player1.vy;

    //side collisions
    if(player1.x + 30 > canvas.width){
        player1.vx = -10;
        player1.counter += 1;
    } else if (player1.x - 30 < canvas.width - canvas.width){
        player1.vx = 10;
        player1.counter += 1;
    }

    //top and bottom collision
    if(player1.y + 30 > canvas.height){
        player1.vy = -10;
        player1.counter += 1;
    } else if (player1.y - 30 < canvas.height - canvas.height){
        player1.vy = 10;
        player1.counter += 1;
    }

    
    
}