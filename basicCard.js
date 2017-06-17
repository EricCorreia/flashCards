var fs = require('fs');

funciton.BasicFlashcard(front, back) {

  this.front = front;
  this.back = back;
  this.print = function(){
    console.log(this.front);
    console.log(this.back);
  };

};

module.exports = BasicFlashcard
