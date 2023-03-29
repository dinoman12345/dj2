DinoSong = "";
function preload(){
DinoSong = loadSound("music.mp3");
} 
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    dinov = createCapture(VIDEO);
    dinov.hide();
    dinoarecool = ml5.poseNet(dinov,modledino);
    dinoarecool.on('pose',gotdino);
}
function draw(){
    image(dinov,0,0,600,500);
}
function modledino(){
    console.log ("posenet is dead and dinos are cool and i like them i do not care about anyone else saying otherwise");
}
function gotdino(answer){
    console.log(answer)
}