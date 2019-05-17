class Cactus {


constructor(x){
    this.x = x;
    this.y = randomNum(140,170);
    this.h = canvasHeight-this.y;
    this.w = 10;
    this.speed = -4;
    this.collision;
}



show() {
    ctx.fillStyle = "black"
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

removeAndAdd(){
  if (this.x < -this.w) {
    cactus.shift();
      if (cactus.length < numberOfCactus) {
        
      cactus.push(new Cactus(canvasWidth, this.y, 10, this.h));
      
    }

  }








}




}