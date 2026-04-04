const levels = [

    // 🟢 LEVEL 1 — NORMAL
    {
        players: { x: 20, y: 400 },

        walls: [
            { x: 0, y: 0, width: 800, height: 10 },   // top
            { x: 0, y: 0, width: 10, height: 500 },   // left
            { x: 790, y: 0, width: 10, height: 500 }, // right
            { x: 0, y: 490, width: 800, height: 10 }, // bottom

            { x: 200, y: 200, width: 300, height: 10 },
            { x: 400, y: 100, width: 10, height: 200 }
        ],

        orbs: [
            { x: 300, y: 300, type: "normal" },
            { x: 600, y: 200, type: "normal" }
        ],

        end: { x: 750, y: 20 },

        rules: {
            reverseControls: false,
            speedMultiplier: 1,
            freezeTime: false
        }
    },

    // 🟡 LEVEL 2 — REVERSE CONTROLS
    {
        player: { x: 20, y: 400 },

        walls: [
            { x: 0, y: 0, width: 800, height: 10 },
            { x: 0, y: 0, width: 10, height: 500 },
            { x: 790, y: 0, width: 10, height: 500 },
            { x: 0, y: 490, width: 800, height: 10 },

            { x: 150, y: 250, width: 400, height: 10 }
        ],

        orbs: [
            { x: 500, y: 300, type: "normal" },
            { x: 650, y: 100, type: "normal" }
        ],

        end: { x: 750, y: 20 },

        rules: {
            reverseControls: true,
            speedMultiplier: 1,
            freezeTime: false
        }
    },

    // 🔵 LEVEL 3 — SPEED POWERUP
    {
        player: { x: 20, y: 400 },

        walls: [
            { x: 0, y: 0, width: 800, height: 10 },
            { x: 0, y: 0, width: 10, height: 500 },
            { x: 790, y: 0, width: 10, height: 500 },
            { x: 0, y: 490, width: 800, height: 10 },

            { x: 250, y: 150, width: 10, height: 250 },
            { x: 450, y: 50, width: 10, height: 250 }
        ],

        orbs: [
            { x: 300, y: 350, type: "normal" },
            { x: 500, y: 250, type: "speed" } // 🔥 powerup
        ],

        end: { x: 750, y: 20 },

        rules: {
            reverseControls: false,
            speedMultiplier: 1,
            freezeTime: false
        }
    },

    // 🟣 LEVEL 4 — FREEZE TIME
    {
        player: { x: 20, y: 400 },

        walls: [
            { x: 0, y: 0, width: 800, height: 10 },
            { x: 0, y: 0, width: 10, height: 500 },
            { x: 790, y: 0, width: 10, height: 500 },
            { x: 0, y: 490, width: 800, height: 10 }
        ],

        orbs: [
            { x: 300, y: 300, type: "normal" },
            { x: 600, y: 150, type: "freeze" } // ❄️ power
        ],

        end: { x: 750, y: 20 },

        rules: {
            reverseControls: false,
            speedMultiplier: 1,
            freezeTime: true
        }
    },

    // 🔴 LEVEL 5 — CHAOS
    {
        player: { x: 20, y: 400 },

        walls: [
            { x: 0, y: 0, width: 800, height: 10 },
            { x: 0, y: 0, width: 10, height: 500 },
            { x: 790, y: 0, width: 10, height: 500 },
            { x: 0, y: 490, width: 800, height: 10 },

            { x: 200, y: 200, width: 400, height: 10 },
            { x: 400, y: 100, width: 10, height: 300 }
        ],

        orbs: [
            { x: 250, y: 350, type: "speed" },
            { x: 550, y: 200, type: "reverse" },
            { x: 650, y: 100, type: "freeze" }
        ],

        end: { x: 750, y: 20 },

        rules: {
            reverseControls: false,
            speedMultiplier: 1,
            freezeTime: false
        }
    }

];