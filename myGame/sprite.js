
class Sprite {
    constructor(sheetWidth,sheetHeight,cols,rows,character,src,x,y,totalFrame, canWidth, canHeight){
      this.srcX;
      this.srcY;
        
        this.sheetWidth = sheetWidth;
        this.sheetHeight = sheetHeight;
        this.cols = cols;
        this.rows = rows;
        this.width = sheetWidth / cols;
        this.height = sheetHeight / rows;
        this.currentFrame = 0;
        this.character = character;
        this.character.src = src
        this.x = x;
        this.y = y;
        this.numOfFrames = 0;
        this.totalFrame = totalFrame;
        this.canWidth = canWidth;
        this.canHeight = canHeight;
    }
    
    
    updateFrame(){
    this.srcX = this.currentFrame * this.width;
    this.srcY = 0;
    this.numOfFrames++
    if(this.numOfFrames == this.totalFrame){
    this.currentFrame = ++this.currentFrame % this.cols;
    this.numOfFrames = 0;
    }
    
    
    }
    
    draw(x,y,w,h){
    ctx.drawImage(this.character,this.srcX,this.srcY,this.width,this.height,x,y,w,h);
    }
    
    
    
    }
    