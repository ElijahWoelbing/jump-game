class Sound{
    constructor(src){
    this.noise = document.createElement("audio");
    this.noise.src = src;
    this.noise.setAttribute("preload", "auto");
    this.noise.setAttribute("controls", "none");
    this.noise.style.display = "none";
    document.body.appendChild(this.noise);
}
play(){
this.noise.play();

}

stop(){
this.noise.pause();



}


}