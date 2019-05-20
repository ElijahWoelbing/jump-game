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
let score;
let runSprite;
let jumpSprite;
let duckSprite;
// set up function
function setup(){
score = 0;
dino = new Dino();
for (i = 0; i < numberOfCactus; i++) {
    cactus[i] = new Cactus(canvasWidth + i * 300);
}


}

window.onload = setup;


// animation loop
function draw(){
    stopId=window.requestAnimationFrame(draw);
  
    
    backGround(); 
    // display cactus and hit detection
    for (i = 0; i < cactus.length; i++) {
        cactus[i].show();
        cactus[i].move();
        cactus[i].hitDetection(); 
        cactus[i].removeAndAdd(cactus,numberOfCactus);
        cactus[i].animate();
        console.log(cactus[i].y,cactus[i].x,cactus[i].w,cactus[i].h);
      }
      updateScore();
        dino.show();
        dino.jump();
        dino.animate();
    
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
        dino.jumpSound.play();
        dino.dir = -3;
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
        window.addEventListener("keydown",function(e){
            dino.duck(true,e);
        });
        window.addEventListener("keyup",function(e){
           dino.duck(false,e);
        });
        started = true;
    } else if(started === true){
        // resets game
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,canvasWidth, canvasHeight);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.font = "40px Arial";
        ctx.fillText("Start A Game", 155, 75);
        cancelAnimationFrame(stopId);
        setup();
        started = false;
        
    }

}


// end game
    function endGame(){
    dino.deathSound.play();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.font = "40px Arial";
    ctx.fillText("Game Over", 155, 75);
    ctx.fillText(`score: ${score}`, 155,150);
    cancelAnimationFrame(stopId);


    }


// updates score
function updateScore(){
  
  ctx.fill();
  ctx.font = "12px Arial";
  ctx.fillText(`score:${score++}`, 20, 20);





}


