const startButton = document.getElementById("start_btn");
const restartButton = document.getElementById("restart_btn")
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let started = false;
const canvasWidth = 600;
const canvasHeight = 200;
let stopId;
let dino;
let numberOfCactus = 2;
let cactus = [];
let dirSpeed = -3;
let speed = -4;
let score;
function setup(){
  score = 0;
dino = new Dino(0, 170);
for (i = 0; i < numberOfCactus; i++) {
  let cactusY = randomNum(140,170);
  let cactusHeight = cactusY + canvasHeight-cactusY;
    cactus[i] = new Cactus(canvasWidth + i * 300, cactusY, speed, randomNum(10,30), cactusHeight);
  
  
  }
  

}

window.onload = setup;
// // speed up game
setInterval(function(){
  if(speed >= -6){
    speed += -.1;}
}, 10000);

// animation loop
function draw(timeStamp){
    stopId=window.requestAnimationFrame(draw);
    let collision;
    let cactusY = randomNum(140,170);
    let cactusHeight = cactusY + canvasHeight-cactusY;
    backGround(); 
    // display cactus and hit detection
    for (i = 0; i < cactus.length; i++) {
        cactus[i].show();
        cactus[i].move();
        if (cactus[i].x > dino.x + dino.w || cactus[i].y > dino.y + dino.h || cactus[i].x + cactus[i].w < dino.x || cactus[i].y + cactus[i].h < dino.y) {
          collision = false;
    
        } else {
          collision = true;
    
        }
        if (collision == true) {
           endGame();
            
            
        } 
        if (cactus[i].x < -40) {
          cactus.shift();
            if (cactus.length < numberOfCactus) {
              
            cactus.push(new Cactus(canvasWidth, cactusY, speed, randomNum(5,40), cactusHeight));
            
          }
    
        }
        
      }
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.font = "12px Arial";
      ctx.fillText(`score:${score++}`, 20, 20);

console.log(speed, dirSpeed);
 
    dino.show();
    dino.jump();
    
    

    
    
    
    
       // create ground
ctx.fillStyle = "brown";
ctx.fill();
ctx.fillRect(0,canvasHeight-10,canvasWidth,10); 
// request animation
    
}
// draws background
function backGround(){
ctx.fillStyle = "white";
ctx.fill();
ctx.fillRect(0,0,canvasWidth,canvasHeight);

}
  
// generate random number
function randomNum(min,max){

return Math.floor(Math.random()*(max-min + 1) + min)

}


// sets dinos jump direction
function jumpDirection(e){
    if(e.key == "ArrowUp" && dino.jumped == false){
        dino.dir = dirSpeed;
        dino.jumped = true;
        }
        
        }




startButton.addEventListener("click", startAnimation);

// start/stop animation loop
function startAnimation(){
    if(started === false){
        window.requestAnimationFrame(draw);
        // adds keydown event for jump
        window.addEventListener("keydown",jumpDirection);
        started = true;
    } else if(started === true){
        // resets game
        speed = -4;
        cancelAnimationFrame(stopId);
        setup();
        started = false;
        
    }

}


// end game
    function endGame(){
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", 155, 75);
    ctx.fillText(`score: ${score}`, 155,150);
    cancelAnimationFrame(stopId);


    }






