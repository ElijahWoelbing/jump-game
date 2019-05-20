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
this.duckHeight = 40;
this.runSprite = new Sprite(502,228,3,1,new Image(),"images/404dino.png",this.x,this.y,10,this.w,this.h);
this.jumpSprite = new Sprite(164,230,1,1,new Image(),"images/404jump.png",this.x,this.y,40,this.w,this.h);
this.duckSprite = new Sprite(559,99,3,1,new Image(),"images/404duck.png",this.x,this.y,10,this.w,this.duckHeight);  
this.jumpSound = new Sound("audio/jump.mp3");
this.deathSound= new Sound("audio/death.mp3");
}

show(){
ctx.fillStyle ="rgba(0,0,0,0)";
ctx.fill();
ctx.fillRect(this.x,this.y,this.w,this.h);
}

jump() {
  if(this.ducking == false){
    this.y += this.dir;
  if (this.y <= this.jumpHeight) {
    this.dir = 3;
  }
  if (this.y == 140 ) {
    this.dir = 0;
this.jumped = false;
  }
  }
}


duck(_ducking,e){

if(e.key=="ArrowDown" && this.jumped == false){
  this.ducking = _ducking;
 if(this.ducking == false) {
    this.y = 140;
    this.h = 60;
    this.w = 30;
} else if(this.ducking == true){
    this.y = 160;
    this.h = 35;
    this.w = 60;

  }
}

}

animate(){
  if(this.jumped == false && this.ducking == false){
    this.runSprite.updateFrame();
    this.runSprite.draw(this.x, this.y,this.w,this.h);
} else if(this.jumped == true){
    this.jumpSprite.updateFrame();
    this.jumpSprite.draw(this.x, this.y,this.w,this.h);
}
else if (this.ducking = true){
    this.duckSprite.updateFrame();
    this.duckSprite.draw(this.x, this.y,this.w,40);

}




}




}