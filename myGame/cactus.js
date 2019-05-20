class Cactus {


constructor(x){
    this.x = x;
    this.y = randomNum(100,170);
    this.w = randomNum(15,25)
    this.h = canvasHeight-this.y;
    this.speed = -4;
    this.collision;
    this.ratio = randomNum(1,10);
    this.bird;
    this.birdSprite = new Sprite(257,50,3,1,new Image(),"images/404bird.png",this.x,this.y,10,this.w,this.h);
    this.cactusSprite = new Sprite(40,52,2,1,new Image(),"images/404cactus.png",this.x,this.y,20,this.w,this.h);

}



show() {
    this.w = 15;
    this.h = canvasHeight-this.y;
    ctx.fillStyle ="rgba(0,0,0,0)";
    ctx.fill()
if (this.ratio > 8 || this.y < 130){
  this.bird = true;
    this.w = 25;
    this.h = 20;
    ctx.fillRect(this.x, this.y, this.w, this.h);
}
  else if( this.ratio <= 8){
    this.bird = false;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  
}

  move() {
    this.x += this.speed;

  }


hitDetection(){

    if (this.x > dino.x + dino.w || this.y > dino.y + dino.h || this.x + this.w < dino.x || this.y + this.h < dino.y) {
      this.collision = false;

    } else {
      this.collision = true;

    }
    if (this.collision == true) {
       endGame();
        
        
    } 
}

removeAndAdd(_cactus,_numberof){
  if (this.x < -this.w) {
    _cactus.shift();
      if (_cactus.length < _numberof) {
        
     _cactus.push(new Cactus(canvasWidth, this.y, this.w, this.h));
      
    }

  }
}

animate(){
if (this.bird == true){
this.birdSprite.updateFrame();
this.birdSprite.draw(this.x, this.y,this.w,this.h);
}

else{
  this.cactusSprite.updateFrame();
  this.cactusSprite.draw(this.x, this.y,this.w,this.h);
  }

}



}