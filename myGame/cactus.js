class Cactus {


constructor(x, y, speed, cactusWidth, cactusheight){
    this.x = x;
    this.y = y;
    this.h = cactusheight;
    this.w = cactusWidth;
    this.speed = speed;
    
}



show() {
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.fillRect(this.x, this.y, this.w, this.h)


  }


  move() {
    this.x += this.speed;

  }


}