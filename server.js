var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(4567);


tank1 = require('./tank1');
tank2 = require('./tank2');

tanks = {
    t1:'asd',
    t2:'asd'
}


//matrix//==========================================================
matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]
//=================================================================

function tankFinder(){
    for(x in matrix){
        for(y in matrix){
            if(matrix[x][y] == 1){
                tanks.t1 = new tank1;
            }
            else if(matrix[x][y] == 2){
                tanks.t2 = new tank2;
            }
        }
    }
}

function repeat(){
    io.sockets.emit('matrix', matrix);
}

function move1(move){
    if(move == 'down'){
        tanks.t1.moveDown();
    }
}


tankFinder();
io.sockets.on('t1move', move1);
setInterval(repeat, 100);


