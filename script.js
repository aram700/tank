var socket = io();
var world
n = 9
side = 50

function setup() {
    noStroke();
    createCanvas(n * side, n * side, side, side);
}

function drawWorld(matrix) {
    for (x in matrix) {
        for (y in matrix) {
            if (matrix[x][y] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 1) {
                fill('#acacac');
                rect(x * side, y * side, side, side)
                fill('blue');
                ellipse(x * side + side/2, y * side + side/2, side, side)
                fill('lightblue');
                ellipse(x*side + side/2, y*side + side/2, side/2,side/2);
                ellipse(x*side + side/2, y* side + side, 25, 50);
            }
        }
    }
}
move = false;
function keyPressed(){
    if(keyCode == DOWN_ARROW){
        move = 'down';
    }
    else if(keyCode == RIGHT_ARROW){
        move = 'right';
    }
    else if(keyCode == UP_ARROW){
        move = 'up';
    }
    else if(keyCode == LEFT_ARROW){
        move = 'left';
    }
    socket.emit('t1move', move);
}

socket.on('matrix', drawWorld);