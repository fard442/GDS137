var canvas = document.getElementById("myCanvas");
var pen = canvas.getContext("2d");


//listeners
document.addEventListener("keydown", up);
document.addEventListener("keydown", down);

var timer;

var interval = 1000/60;
timer = setInterval(animate, interval);

class GameObject {
    constructor(canvas, pen){
        this.canvas = canvas;
        this.pen = pen;

        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.lastPosY = 0;

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
    
    checkBorders();

    
    // player1.x += player1.vx;
    // player1.y += player1.vy;

    // //side collisions
    // if(player1.x + 30 > canvas.width){
    //     player1.vx = -10;
    //     player1.counter += 1;
    // } else if (player1.x - 30 < canvas.width - canvas.width){
    //     player1.vx = 10;
    //     player1.counter += 1;
    // }

    //top and bottom collision

    // if(player1.y + 50 > canvas.height){
    //     lastPosY = player1.y;
    //     player1.y = lastPosY;
    // } else if (player1.y - 50 < canvas.height - canvas.height){
    //     lastPosY = player1.y;
    //     player1.y = lastPosY;
    // }

    
    
}

//out of bounds boxes
function checkBorders(){
    if(player1.y + 101 >= canvas.height){
        // player1.lastPosY = player1.y;
        player1.y = canvas.height - 101;
        // console.log(player1.lastPosY);
    } else if (player1.y - 1 < canvas.height - canvas.height){
        // player1.lastPosY = player1.y;
        player1.y = canvas.height - canvas.height;
        // console.log(player1.lastPosY);
    }
}

function up(w){
    if(w.keyCode == 87)
	{
		player1.y -= player1.vy
	} 
}

function down(s){
    if(s.keyCode == 83)
	{
		player1.y += player1.vy
	}
}

//update damn you
