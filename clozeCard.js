var fs = require('fs');

funciton ClozeFlashcard(text, cloze){
  this.text = text;
  this.cloze = text.slice(30,500);
  this.partial = text.slice(0,29);
  this.fullText = this.text
  this.print = function(){
    console.log(this.cloze);
    console.log(this.partial);
    console.log(this.fullText);
  };
};

module.exports = ClozeFlashcard;
