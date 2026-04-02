let players = document.getElementById("player");
const arena = document.getElementById("arena");
let timer = document.getElementById("tym");

//Timer
let startTime = null;

function timeUpdate(timestamp) {
    if (!startTime) startTime = timestamp;
    let elapsed = Math.floor((timestamp - startTime) / 1000);
    timer.innerHTML = elapsed;
    requestAnimationFrame(timeUpdate);
}
requestAnimationFrame(timeUpdate);
// Player Movements...
let posX=20,posY=400;
document.addEventListener("keydown",function(e){
    let step = 20;
    if(e.code === "ArrowUp")posY -= step;
    if(e.code === "ArrowDown") posY += step;
    if(e.code === "ArrowLeft")posX -= step;
    if(e.code === "ArrowRight")posX += step;

    boundary();
    updatePosition();
});

function updatePosition(){
    players.style.left = posX + "px";
    players.style.top = posY + "px";
}
function boundary() {
    const maxX = arena.clientWidth - players.clientWidth;
    const maxY = arena.clientHeight - players.clientHeight;

    posX = Math.max(0, Math.min(posX, maxX));
    posY = Math.max(0, Math.min(posY, maxY));
}
//Collision 
