var rngWorld = Math.floor(Math.random()*3);
var rngWorld = 3;
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
}else if (rngWorld == 3){
    var world = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
}

var pacman = {
    row: 1,
    col: 1,
    lives: 3,
    score:0,
    topScore: 0
};
var pacman2 = {
    row: 8,
    col: 1,
    lives: 3,
    score: 0,
    topScore:0
};
var orange = {
    row: 2,
    col: 2,
};
var pink = {
    row: 3,
    col: 3,
};
var teal = {
    row: 6,
    col: 3,
};
var red = {
    row: 7,
    col: 2,
};

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2")


function drawWorld (){
    var output = "";
    for (var row = 0; row<world.length; row++){
        output+= "\n<div class='row' style='height: 20px;'>\n";
        // output+= "\n<div class='row'>\n";
        for (let col = 0; col < world[row].length; col++) {
            if (world[row][col] == 0){
            output+= "<div class='brick'></div>";
            }
            else if (world[row][col] == 1){
                output+= "<div class='coin'></div>";
            }
            else if (world[row][col] == 2){
                output+= "<div class='empty'></div>";
            }
            else if (world[row][col] == 3){
                output+= "<div class='cherry'></div>";
            }
        }
        output+= "</div>";
    }
    // console.log(output);
    document.querySelector("#world").innerHTML = output;
}

function drawPacman() {
    document.querySelector("#pacman").style.top = pacman.row*20+"px";
    document.querySelector("#pacman").style.left = pacman.col*20+"px";
    // console.log(`row is ${pacman.row} col is ${pacman.col}`)
    document.querySelector("#pacman2").style.top = pacman2.row*20+"px";
    document.querySelector("#pacman2").style.left = pacman2.col*20+"px";
    // console.log("pacman.row"+pacman.row);
    // console.log("pacman.col"+pacman.col);
}
function drawGhosts() {
    document.querySelector("#orange").style.top = orange.row*20+"px";
    document.querySelector("#orange").style.left = orange.col*20+"px";
    document.querySelector("#pink").style.top = pink.row*20+"px";
    document.querySelector("#pink").style.left = pink.col*20+"px";
    document.querySelector("#teal").style.top = teal.row*20+"px";
    document.querySelector("#teal").style.left = teal.col*20+"px";
    document.querySelector("#red").style.top = red.row*20+"px";
    document.querySelector("#red").style.left = red.col*20+"px";

    // console.log("pacman.row"+pacman.row);
    // console.log("pacman.col"+pacman.col);
}
drawGhosts();

function drawCherry() {
    var output = document.querySelector("#world").innerHTML;
    // console.log(world);
    for (var row = 0; row<world.length; row++){
        for (let col = 0; col < world[row].length; col++) {
            var rngCherry = Math.floor(Math.random()*15);
            var rngBanana = Math.floor(Math.random()*30);
            if (world[row][col] == 1){
                if (rngCherry == 1){
                    world[row][col] = 3;
                }else if (rngBanana == 1){
                    world[row][col] 
                }
            }
        }
    }
    // console.log(world);
    // console.log(output);
    document.querySelector("#world").innerHTML = output;
    drawWorld();
}
drawCherry();

function updateScoreboard() {
//     // console.log(document.querySelector("score"));
    player1.children[1].innerHTML = `Score: ${pacman.score}`;
    player2.children[1].innerHTML = `Score: ${pacman2.score}`;
    player1.children[2].innerHTML = `Lives: ${pacman.lives}`;
    player2.children[2].innerHTML = `Lives: ${pacman2.lives}`;
    player1.children[3].innerHTML = `Top Score: ${pacman.topScore}`;
    player2.children[3].innerHTML = `Top Score: ${pacman2.topScore}`;
    
}
// function updateLives() {
//     console.log(document.querySelector("score"));
// }

// WASD & Arrow key checks
document.onkeydown = function(e){
    var pacmanDirection = document.querySelector("#pacman");
    var pacmanDirection2 = document.querySelector("#pacman2");
    // console.log(e.key);

    // move player 1
    if(e.key == "ArrowLeft" && world[pacman.row][pacman.col-1] != 0 && pacman.col > 0){
        // console.log(e);
        pacman.col--;
        pacmanDirection.style.transform = "rotate(180deg)";
    }
    else if(e.key == "ArrowRight" && world[pacman.row][pacman.col+1] != 0){
        // console.log(e);
        pacman.col++;
        pacmanDirection.style.transform = "rotate(0deg)";
    }
    else if(e.key == "ArrowUp" && world[pacman.row-1][pacman.col] != 0){
        // console.log(e);
        pacman.row--;
        pacmanDirection.style.transform = "rotate(270deg)";
    }
    else if(e.key == "ArrowDown" && world[pacman.row+1][pacman.col] != 0){
        // console.log(e);
        pacman.row++;
        pacmanDirection.style.transform = "rotate(90deg)";
    }
    // score player 1
    if (world[pacman.row][pacman.col] == 1){
        world[pacman.row][pacman.col] = 2;
        pacman.score+=10;
        drawWorld();
    }else if(world[pacman.row][pacman.col] == 3){
        world[pacman.row][pacman.col] = 2;
        pacman.score+=50;
        drawWorld();
    }
    // move player 2
    if(e.key == "a" && world[pacman2.row][pacman2.col-1] != 0 && pacman2.col > 0){
        // console.log(e);
        pacman2.col--;
        pacmanDirection2.style.transform = "rotate(180deg)";
    }
    else if(e.key == "d" && world[pacman2.row][pacman2.col+1] != 0){
        // console.log(e);
        pacman2.col++;
        pacmanDirection2.style.transform = "rotate(0deg)";
    }
    else if(e.key == "w" && world[pacman2.row-1][pacman2.col] != 0){
        // console.log(e);
        pacman2.row--;
        pacmanDirection2.style.transform = "rotate(270deg)";
    }
    else if(e.key == "s" && world[pacman2.row+1][pacman2.col] != 0){
        // console.log(e);
        pacman2.row++;
        pacmanDirection2.style.transform = "rotate(90deg)";
    }
    // score player 2
    if (world[pacman2.row][pacman2.col] == 1){
        world[pacman2.row][pacman2.col] = 2;
        pacman2.score+=10;
        drawWorld();
    }else if(world[pacman2.row][pacman2.col] == 3){
        world[pacman2.row][pacman2.col] = 2;
        pacman2.score+=50;
        drawWorld();
    }
    drawPacman();
    updateScoreboard();
}

// scatter ghosts and move pacman to test collisions
// Check for player collision with ghosts
setInterval(function(){
    if((pacman.row == orange.row && pacman.col == orange.col) || 
    (pacman.row == pink.row && pacman.col == pink.col) ||
    (pacman.row == teal.row && pacman.col == teal.col) ||
    (pacman.row == red.row && pacman.col == red.col)){
        newLife();
    }else if ((pacman2.row == orange.row && pacman2.col == orange.col) || 
    (pacman2.row == pink.row && pacman2.col == pink.col) ||
    (pacman2.row == teal.row && pacman2.col == teal.col) ||
    (pacman2.row == red.row && pacman2.col == red.col)){
        newLife2();
    }
}, 1000);

// New Life 
function newLife() {
    if (pacman.lives > 1){
        pacman.row = 1;
        pacman.col = 1;
        pacman.lives--;
        drawPacman();
        updateScoreboard();
    }else {
        pacman.row = 0;
        pacman.col = 0;
        pacman.lives--
        if (pacman.score > pacman.topScore){
            pacman.topScore = pacman.score;
        }
        drawPacman();
        updateScoreboard();
    }
}
function newLife2() {
    if (pacman2.lives > 1){
        pacman2.row = 8;
        pacman2.col = 1;
        pacman2.lives--;
        drawPacman();
        updateScoreboard();
    }else {
        pacman2.row = 14;
        pacman2.col = 0;
        pacman2.lives--
        if (pacman2.score > pacman2.topScore){
            pacman2.topScore = pacman2.score;
        }
        drawPacman();
        updateScoreboard();
    }
}

// move orange
setInterval(function(){
    // console.log(`pacman row, col is ${pacman.row}, ${pacman.col}`);
    // console.log(`orange row, col is ${orange.row}, ${orange.col}`);
    if(pacman.lives > 0){
        if(orange.row > pacman.row && 1 < orange.row < 8){
            orange.row--;
        }else if(orange.row < pacman.row && 1 < orange.row < 9){
            orange.row++;
        }
        if(orange.col > pacman.col && 1 < orange.col < 9){
            orange.col--;
        }else if(orange.col < pacman.col && 1 < orange.col < 9){
            orange.col++;
        }
    }
    else{orange.col = 4; orange.row = 4;}
drawGhosts();
},1000)
