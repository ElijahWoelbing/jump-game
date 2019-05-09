class Dino {

constructor(x,y){

this.x = x;
this.y = 170;
this.w = 20;
this.h = 20;
this.dir = 0;
this.jumped = false;
this. jumpHeight = 80;

}

show(){
ctx.fillStyle="green";
ctx.fill();
ctx.fillRect(this.x,this.y,20,20);
}

jump() {
    this.y += this.dir;
  if (this.y <= this.jumpHeight) {
    this.dir = 3;
  }
  if (this.y == 170  ) {
    this.dir = 0;
this.jumped = false;
  }
}




}