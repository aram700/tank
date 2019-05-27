base = require('./class.js');

module.exports = class tank1 extends base{
    moveDown(){
        matrix[this.x][this.y] = 0;
        this.y--;
        matrix[this.x][this.y] = 1;
    }
}