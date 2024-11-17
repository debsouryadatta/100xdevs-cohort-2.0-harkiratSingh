import { gameInstance } from "./GameManager";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    gameInstance.addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)