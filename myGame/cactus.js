class Cactus {


constructor(x, y, speed, cactusWidth, cactusheight){
    this.x = x;
    this.y = y;
    this.h = cactusheight;
    this.w = cactusWidth;
    this.speed = speed;
    this.collision;
    
}



show() {
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.fillRect(this.x, this.y, this.w, this.h)


  }


  move() {
    this.x += this.speed;

  }


hitDetection(){

    if (this.x > dino.x + dino.w || this.y > dino.y + dino.h || this.x + cactus[i].w < dino.x || this.y + this.h < dino.y) {
      this.collision = false;

    } else {
      this.collision = true;

    }
    if (this.collision == true) {
       endGame();
        
        
    } 
}

removeAndAdd(cactusY, cactusHeight){
  if (this.x < -40) {
    cactus.shift();
      if (cactus.length < numberOfCactus) {
        
      cactus.push(new Cactus(canvasWidth, cactusY, speed, 10, cactusHeight));
      
    }

  }








}




}