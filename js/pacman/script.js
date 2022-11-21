var rngWorld = Math.floor(Math.random()*3);
// var rng = 1;
if (rngWorld == 0){
    var world = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,1,1,0,1,0,0,0,1,0],
        [0,1,1,0,1,0,1,0,1,0],
        [0,1,1,0,1,0,1,0,1,0],
        [0,1,1,0,0,0,1,0,1,0],
        [0,1,1,1,1,1,1,0,1,0],
        [0,2,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
}else if (rngWorld == 1){
    var world = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,1,1,1,0,0],
        [0,1,0,1,1,1,1,1,1,0],
        [0,1,0,1,1,0,0,0,1,0],
        [0,1,0,1,1,1,1,0,1,0],
        [0,1,0,1,0,1,1,0,1,0],
        [0,1,0,1,1,1,1,0,1,0],
        [0,1,0,0,0,0,1,0,1,0],
        [0,2,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
}else if (rngWorld == 2){
    var world = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,2,1,1,1,0,1,1,1,0],
        [0,0,0,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,0,0,0,1,1,0],
        [0,1,1,1,1,0,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,1,1,1,0],
        [0,2,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
}

var pacman = {
    x: 1,
    y: 1
};
var pacman2 = {
    x: 1,
    y: 8
};


var score = 0;
var score2 = 0;

function drawWorld (){
    var output = "";
    
    for (var i = 0; i<world.length; i++){
        output+= "\n<div class='row' style='height: 50px;'>\n";
        // output+= "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 0){
            output+= "<div class='brick'></div>";
            }
            else if (world[i][j] == 1){
                output+= "<div class='coin'></div>";
            }
            else if (world[i][j] == 2){
                output+= "<div class='empty'></div>";
            }
            else if (world[i][j] == 3){
                output+= "<div class='cherry'></div>";
            }
        }
        output+= "</div>";
    }
    // console.log(output);
    document.getElementById("world").innerHTML = output;
}

function drawPacman() {
    document.getElementById("pacman").style.top = pacman.y*50+"px";
    document.getElementById("pacman").style.left = pacman.x*50+"px";
    // console.log("pacman.x"+pacman.x);
    // console.log("pacman.y"+pacman.y);
}
function drawPacman2() {
    document.getElementById("pacman2").style.top = pacman2.y*50+"px";
    document.getElementById("pacman2").style.left = pacman2.x*50+"px";
    // console.log("pacman.x"+pacman.x);
    // console.log("pacman.y"+pacman.y);
}

function drawCherry() {
    var output = document.getElementById("world").innerHTML;
    // console.log(world);
    for (var i = 0; i<world.length; i++){
        for (let j = 0; j < world[i].length; j++) {
            var rngCherry = Math.floor(Math.random()*15);
            if (world[i][j] == 1){
                if (rngCherry == 1){
                    world[i][j] = 3;
                }
            }
        }
    }
    // console.log(world);
    // console.log(output);
    document.getElementById("world").innerHTML = output;
    drawWorld();
}
drawCherry();

function updateScore() {
    // console.log(document.getElementById("score"));
    document.getElementById("score").innerHTML = `Score 1: ${score}`;
    document.getElementById("score2").innerHTML = `Score 2: ${score2}`;
}

drawWorld ();
// drawCherry();
drawPacman();
drawPacman2();


document.onkeydown = function(f){
    var pacmanDirection = document.querySelector("#pacman");
    var pacmanDirection2 = document.querySelector("#pacman2");

    // console.log(f.keyCode);
    if(f.keyCode == 37 && world[pacman.y][pacman.x-1] != 0){
        // console.log(f);
        pacman.x--;
        pacmanDirection.style.transform = "rotate(180deg)";
    }
    else if(f.keyCode == 39 && world[pacman.y][pacman.x+1] != 0){
        // console.log(f);
        pacman.x++;
        pacmanDirection.style.transform = "rotate(0deg)";
    }
    else if(f.keyCode == 38 && world[pacman.y-1][pacman.x] != 0){
        // console.log(f);
        pacman.y--;
        pacmanDirection.style.transform = "rotate(270deg)";
    }
    else if(f.keyCode == 40 && world[pacman.y+1][pacman.x] != 0){
        // console.log(f);
        pacman.y++;
        pacmanDirection.style.transform = "rotate(90deg)";
    }
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 2;
        score+=10;
        drawWorld();
    }else if(world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 2;
        score+=50;
        drawWorld();
    }
    if(f.keyCode == 65 && world[pacman2.y][pacman2.x-1] != 0){
        console.log(f);
        pacman2.x--;
        pacmanDirection2.style.transform = "rotate(180deg)";
    }
    else if(f.keyCode == 68 && world[pacman2.y][pacman2.x+1] != 0){
        // console.log(f);
        pacman2.x++;
        pacmanDirection2.style.transform = "rotate(0deg)";
    }
    else if(f.keyCode == 87 && world[pacman2.y-1][pacman2.x] != 0){
        // console.log(f);
        pacman2.y--;
        pacmanDirection2.style.transform = "rotate(270deg)";
    }
    else if(f.keyCode == 83 && world[pacman2.y+1][pacman2.x] != 0){
        // console.log(f);
        pacman2.y++;
        pacmanDirection2.style.transform = "rotate(90deg)";
    }
    if (world[pacman2.y][pacman2.x] == 1){
        world[pacman2.y][pacman2.x] = 2;
        score2+=10;
        drawWorld();
    }else if(world[pacman2.y][pacman2.x] == 3){
        world[pacman2.y][pacman2.x] = 2;
        score2+=50;
        drawWorld();
    }
    drawPacman();
    drawPacman2();
    updateScore();
}