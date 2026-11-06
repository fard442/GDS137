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

        this.x = canvas.width/4;
        this.y = canvas.height/3;
        this.lastPosY = 0;

        this.width = 10;
        this.height = 150;

        this.top = this.y
        this.left = this.x
        this.right = this.x + this.width
        this.bottom = this.y + this.height
        
        this.color = "white";

        this.vx = 30;
        this.vy = 30;

        this.counter = 0;
    }

    drawCircle(){
        this.pen.beginPath();
        this.color = "blue"
        this.pen.arc(this.x, this.y, 15, 0, Math.PI *2);
        this.pen.fillStyle = this.color;
        this.pen.fill();
        this.pen.closePath();
    }

    drawRect(){
        this.color = "black"
        this.pen.fillStyle = this.color;
        this.pen.fillRect(this.x, this.y, this.width, this.height);
    }
    
}

var testBar = new GameObject(canvas, pen);

var player1 = new GameObject(canvas, pen);
var ball = new GameObject(canvas, pen);
player1.x = 20;
ball.vx = 3;
ball.vy = 0;

testBar.x = 60

function animate(){
    pen.clearRect(0, 0, canvas.width, canvas.height);

    //test
    // testBar.top = testBar.y
    // testBar.right = testBar.x + testBar.width / 2
    // testBar.bottom = testBar.y + testBar.height
    player1.top = player1.y
    player1.right = player1.x + player1.width
    player1.left = player1.x
    player1.bottom = player1.y + player1.height

   

    // testBar.drawRect();

    player1.drawRect();
    ball.drawCircle();
    
    
    checkBorders();

    ball.x += ball.vx;
    ball.y += ball.vy;

    //side collisions
    if(ball.x + 30 > canvas.width){
        ball.vx = -3;
    } 
    else if (ball.x < canvas.width - canvas.width){
        ball.x = canvas.width/2;
        ball.y = canvas.height/2;
    }

    //top and bottom collision
    if(ball.y + 30 > canvas.height){
        ball.vy = -3;
    } else if (ball.y - 30 < canvas.height - canvas.height){
        ball.vy = 3;
    }
    
    //paddle collision
    // if (ball.x == player1.right && ball.y == player1.bottom || ball.y == player1.top && ball.x <= player1.right)
    // {
    //     console.log("kunk")
    //     console.log(player1.right, ball.y)
    //     ball.vx = -0
    //     ball.vy = -0
    // }

    // if (ball.x == player1.right && ball.y == player1.bottom || ball.x == player1.left && ball.y == player1.bottom || ball.x == player1.right && ball.y == player1.top || ball.x == player1.left && ball.y == player1.top)
    // {
    //     console.log("kunk")
    //     console.log(ball.x, ball.y)
    //     console.log(player1.right, player1.left)
    //     console.log(player1.top, player1.bottom)
    //     ball.vx = -0
    //     ball.vy = -0
    // }

    
    //paddle collision
    if(ball.x <= player1.right + 5 && ball.x >= player1.left && ball.y >= player1.top && ball.y <= player1.bottom)
    {
        //first third/top part of paddle
        if(ball.y - 55 <= player1.y - player1.height / 6)
        {
            console.log("top")
            ball.vx = +3
            ball.vy = -3
        }
        //bottom part
        if(ball.y >= player1.bottom - 55)
        {
            console.log("bot")
            ball.vx = +3
            ball.vy = +3
        } else 
            {
                console.log("mid")
                ball.vx = 3
            }
        
    }
    // console.log(ball.y, player1.bottom - 55, player1.bottom)
    
    
    
    
    

    // if (ball.x <= testBar.right && ball.y == testBar.bottom || ball.y == testBar.top && ball.x <= testBar.right)
    // {
    //     console.log("kunk")
    //     console.log(testBar.right, ball.y)
    //     ball.vx = 0
    //     ball.vy = 0
    // }
    // console.log(testBar.right, testBar.top, testBar.bottom)
    // console.log(ball.x, ball.y)
    
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
        // console.log("b");
    }
}

function up(w){
    if(w.keyCode == 87)
	{
		player1.y -= player1.vy
        // console.log(player1.top, player1.right)
        // console.log(player1.bottom, player1.left)
	} 
}

function down(s){
    if(s.keyCode == 83)
	{
		player1.y += player1.vy
	}
}


