let players = document.getElementById("player");
const arena = document.getElementById("arena");
let timer = document.getElementById("tym");
let col1 = document.getElementById("cntr-col1");
let col2 = document.getElementById("cntr-col2");
const walls = document.querySelectorAll(".collider");
const orbs = document.querySelectorAll(".orbs");

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
    let step = 10;
    let newX = posX;
    let newY = posY;
    if(e.code === "ArrowUp")newY -= step;
    if(e.code === "ArrowDown") newY += step;
    if(e.code === "ArrowLeft")newX -= step;
    if(e.code === "ArrowRight")newX += step;

    if (!checkCollision(newX, posY)) {
    posX = newX;
    }
    if (!checkCollision(posX, newY)) {
        posY = newY;
    }
    checkOrbCollision();

        // boundary();
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
function isColliding(playerRect, wallRect) {
    return (
        playerRect.right > wallRect.left &&
        playerRect.left < wallRect.right &&
        playerRect.bottom > wallRect.top &&
        playerRect.top < wallRect.bottom
    );
}

function checkCollision(newX, newY) {
    const playerRect = {
        left: newX,
        top: newY,
        right: newX + players.offsetWidth,
        bottom: newY + players.offsetHeight
    };
    for (let wall of walls) {
        const wallRect = {
        left: wall.offsetLeft,
        top: wall.offsetTop,
        right: wall.offsetLeft + wall.offsetWidth,
        bottom: wall.offsetTop + wall.offsetHeight
        };
        if (isColliding(playerRect, wallRect)) {
            return true; // collision detected
        }
    }
    return false; // no collision
}

// power-ups    
    let collected = 0;
    let total = orbs.length;
    function checkOrbCollision(newX, newY) {
        const playerRect = {
            left: posX,
            top: posY,
            right: posX + players.offsetWidth,
            bottom: posY + players.offsetHeight
        };
        orbs.forEach((frag) => {
                if (frag.style.display === "none") return;

                const fragRect = {
                    left: frag.offsetLeft,
                    top: frag.offsetTop,
                    right: frag.offsetLeft + frag.offsetWidth,
                    bottom: frag.offsetTop + frag.offsetHeight
                };

                if (isColliding(playerRect, fragRect)) {
                    frag.style.display = "none"; // remove fragment
                    collected++;

                    console.log("Collected:", collected);
                }
            });
        }