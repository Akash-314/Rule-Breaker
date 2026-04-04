let players;
const arena = document.getElementById("arena");
let timer = document.getElementById("tym");
let collected = 0;
let total = 0;

// load level
let currentLevel = 0;

function loadLevel() {
    const level = levels[currentLevel];
    const arena = document.getElementById("arena");
    collected = 0;
    total = level.orbs.length;
    
    // clear old stuff
    arena.innerHTML = '<div id="player"></div>';
    
    players = document.getElementById("player");
    
    // set player position
    posX = level.players.x;
    posY = level.players.y;
    updatePosition();
    
    // create walls
    level.walls.forEach(w => {
        let wall = document.createElement("div");
        wall.classList.add("collider");
        
        wall.style.left = w.x + "px";
        wall.style.top = w.y + "px";
        wall.style.width = w.width + "px";
        wall.style.height = w.height + "px";
        arena.appendChild(wall);
    });

        // create orbs
    level.orbs.forEach(o => {
        let orb = document.createElement("div");
        orb.classList.add("orbs");

        orb.style.left = o.x + "px";
        orb.style.top = o.y + "px";

        arena.appendChild(orb);
    });
}
loadLevel();

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
    const walls = document.querySelectorAll(".collider");
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
function checkOrbCollision() {
    const orbs = document.querySelectorAll(".orbs");
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
            if (collected === total) {
            console.log("All collected!");
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel();
            } else {
                alert("Game Complete 🎉");
            }
        }
        }