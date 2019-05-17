class Dino {

constructor(){

this.x = 0;
this.y = 140;
this.w = 30;
this.h = 60;
this.dir = 0;
this.jumped = false;
this.ducking = false;
this. jumpHeight = 40;

}

show(){
ctx.fillStyle="green";
ctx.fill();
ctx.fillRect(this.x,this.y,this.w,this.h);
}

jump() {
    this.y += this.dir;
  if (this.y <= this.jumpHeight) {
    this.dir = 3;
  }
  if (this.y == 140 ) {
    this.dir = 0;
this.jumped = false;
  }
}


duck(_ducking,e){

if(e.key=="ArrowDown" && this.jumped == false){
  this.ducking = _ducking;
 if(this.ducking == false) {
    this.y = 140;
    this.h = 60;
    this.ducking = true;

  } else if(this.ducking == true){
    this.y = 170;
    this.h = 40;
    this.ducking = false
  }
}
}




}